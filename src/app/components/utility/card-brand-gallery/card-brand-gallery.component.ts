import { Component, Input } from '@angular/core';
import { IBodyCardBrand } from '../../../interfaces/brand-gallery.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-card-brand-gallery [card]',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card-brand-gallery.component.html',
})
export class CardBrandGalleryComponent {
  @Input() card!: IBodyCardBrand;
  @Input() chipColor: 'bg-primary' | 'bg-accent' = 'bg-accent';
  @Input() chipTextColor: 'text-black' | 'text-white' = 'text-black';
}
