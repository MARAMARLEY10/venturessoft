import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSpinerComponent } from './load-spiner.component';

describe('LoadSpinerComponent', () => {
  let component: LoadSpinerComponent;
  let fixture: ComponentFixture<LoadSpinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadSpinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadSpinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
