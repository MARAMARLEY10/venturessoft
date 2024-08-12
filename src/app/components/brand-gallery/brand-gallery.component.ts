import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CategoryMenuService } from '../../services/category-menu/category-menu.service';
import { ApiCategoryMenuService } from '../../services/api/api-category-menu.service';
import { delay, filter, take } from 'rxjs';
import { LoadSpinerComponent } from '../utility/load-spiner/load-spiner.component';
import { LanguageService } from '../../services/language/language.service';
import {
  EColsTypeBrand,
  EIconTypebrand,
  IBodyCardBrand,
  IButtonViewBrand,
} from '../../interfaces/brand-gallery.interface';
import { CardBrandGalleryComponent } from '../utility/card-brand-gallery/card-brand-gallery.component';

@Component({
  selector: 'app-brand-gallery',
  standalone: true,
  imports: [
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    LoadSpinerComponent,
    CardBrandGalleryComponent,
  ],
  templateUrl: './brand-gallery.component.html',
})
export class BrandGalleryComponent implements OnInit {
  private categoryService = inject(CategoryMenuService);
  private apiCategory = inject(ApiCategoryMenuService);
  private readonly lenguage = inject(LanguageService);

  readonly text = this.lenguage.lenguages[this.lenguage.lenguageSelected].brandGallery;

  _EColsType = EColsTypeBrand;

  viewButtons: IButtonViewBrand[] = [
    {
      icon: EIconTypebrand.rows,
      isActive: false,
    },
    {
      icon: EIconTypebrand.cols,
      isActive: true,
    },
  ];

  cards: IBodyCardBrand[] = [];
  cardsPaginated: IBodyCardBrand[] = [];

  ngOnInit(): void {
    this.categoryService.idMenuSelected$.pipe().subscribe(MenuItem => {
      this.cards = [];
      this.cardsPaginated = [];

      this.apiCategory
        .getBrandById(MenuItem.idMenu)
        .pipe(
          take(1),
          filter(e => !e.error),
          delay(1000)
        )
        .subscribe({
          next: response => {
            response.menuItems.forEach(item => {
              this.cards.push({
                text: item.descripción,
                brandName: item.nombreMarca,
                img: item.imagen,
                cols: this.getColsByViewSelected(),
              });
            });

            this.setCardsPaginated();
          },
          error: err => {
            throw err;
          },
        });
    });
  }

  setCardsPaginated(isSlide: boolean = true): void {
    this.cardsPaginated = [...this.cards];
    if (this.cards.length > 7 && isSlide) {
      this.cardsPaginated = [...this.cards.slice(0, 7)];
    }
  }

  getColsByViewSelected(): EColsTypeBrand {
    return this.viewButtons[this.viewButtons.findIndex(e => e.isActive)].icon == EIconTypebrand.cols
      ? EColsTypeBrand.cols
      : EColsTypeBrand.rows;
  }

  setActiveButtonView(button: IButtonViewBrand): void {
    this.resetActive();
    button.isActive = true;
    this.changeView(button.icon);
  }

  resetActive(): void {
    this.viewButtons.map(e => (e.isActive = false));
  }

  changeView(iconType: EIconTypebrand): void {
    const indexGridView = 1;
    switch (iconType) {
      case EIconTypebrand.cols:
        this.cards.map(e => (e.cols = EColsTypeBrand.cols));
        break;
      case EIconTypebrand.rows:
        this.cards.map(e => (e.cols = EColsTypeBrand.rows));
        break;

      default:
        this.resetActive();
        this.setActiveButtonView(this.viewButtons[indexGridView]);
        this.cards.map(e => (e.cols = EColsTypeBrand.cols));
        break;
    }
  }
}
