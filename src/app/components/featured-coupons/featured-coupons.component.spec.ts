import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCouponsComponent } from './featured-coupons.component';

describe('FeaturedCouponsComponent', () => {
  let component: FeaturedCouponsComponent;
  let fixture: ComponentFixture<FeaturedCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCouponsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
