import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ApiCategoryMenuService } from '../../services/api/api-category-menu.service';
import { filter, take } from 'rxjs';
import { LoadSpinerComponent } from '../utility/load-spiner/load-spiner.component';
import { CategoryMenuService } from '../../services/category-menu/category-menu.service';
import { IMenuItemCategory } from '../../interfaces/category-menu.interface';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [MatButtonModule, CommonModule, LoadSpinerComponent],
  templateUrl: './category-menu.component.html',
})
export class CategoryMenuComponent implements OnInit {
  private lenguageService = inject(LanguageService);
  private apiCategory = inject(ApiCategoryMenuService);
  private categoryService = inject(CategoryMenuService);

  readonly text =
    this.lenguageService.lenguages[this.lenguageService.lenguageSelected].categoryMenu;

  categoriesMenu: IMenuItemCategory[] = [];

  ngOnInit(): void {
    this.getCategoriesMenu();
  }

  getCategoriesMenu(): void {
    this.apiCategory
      .getAllCategories()
      .pipe(
        take(1),
        filter(e => !e.error)
      )
      .subscribe({
        next: response => {
          response.menuItems.forEach(item =>
            this.categoriesMenu.push({
              text: item.descripción,
              isActive: false,
              idMenu: item.idMenu,
            })
          );
          this.setActive(this.categoriesMenu[0]);
        },
        error: error => {
          throw error;
        },
      });
  }

  setActive(item: IMenuItemCategory) {
    this.resetActive();
    item.isActive = true;
    this.categoryService.setIdMenu(item);
  }

  resetActive(): void {
    this.categoriesMenu.map(e => (e.isActive = false));
  }
}
