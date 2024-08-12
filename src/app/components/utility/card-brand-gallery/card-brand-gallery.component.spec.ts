import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBrandGalleryComponent } from './card-brand-gallery.component';

describe('CardBrandGalleryComponent', () => {
  let component: CardBrandGalleryComponent;
  let fixture: ComponentFixture<CardBrandGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBrandGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBrandGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
