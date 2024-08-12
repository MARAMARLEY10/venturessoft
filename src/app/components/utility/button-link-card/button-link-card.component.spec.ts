import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLinkCardComponent } from './button-link-card.component';

describe('ButtonLinkCardComponent', () => {
  let component: ButtonLinkCardComponent;
  let fixture: ComponentFixture<ButtonLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLinkCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
