import { Component, inject, OnInit } from '@angular/core';
import { EColsTypeBrand, IBodyCardBrand } from '../../interfaces/brand-gallery.interface';
import { CardBrandGalleryComponent } from '../utility/card-brand-gallery/card-brand-gallery.component';
import { CommonModule } from '@angular/common';
import { ApiCategoryMenuService } from '../../services/api/api-category-menu.service';
import { filter, take } from 'rxjs';
import { ButtonLinkCardComponent } from '../utility/button-link-card/button-link-card.component';

@Component({
  selector: 'app-featured-coupons',
  standalone: true,
  imports: [CardBrandGalleryComponent, CommonModule, ButtonLinkCardComponent],
  templateUrl: './featured-coupons.component.html',
})
export class FeaturedCouponsComponent implements OnInit {
  private readonly apiCategory = inject(ApiCategoryMenuService);

  cards: IBodyCardBrand[] = [];

  ngOnInit(): void {
    this.cards = [];

    this.apiCategory
      .getAllCategories()
      .pipe(
        take(1),
        filter(e => !e.error && e.menuItems.length > 0)
      )
      .subscribe({
        next: response => {
          response.menuItems.slice(0, 4).forEach(e => {
            this.apiCategory
              .getBrandById(e.idMenu)
              .pipe(
                take(1),
                filter(e => !e.error && e.menuItems.length > 0)
              )
              .subscribe(e => {
                this.cards.push({
                  img: e.menuItems[0].imagen,
                  brandName: e.menuItems[0].nombreMarca,
                  text: e.menuItems[0].descripción,
                  cols: EColsTypeBrand.cols,
                });
              });
          });
        },
        error: err => {
          throw err;
        },
      });
  }
}
