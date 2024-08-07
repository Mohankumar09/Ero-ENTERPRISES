import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolywoodProductsComponent } from './polywood-products.component';

describe('PolywoodProductsComponent', () => {
  let component: PolywoodProductsComponent;
  let fixture: ComponentFixture<PolywoodProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolywoodProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolywoodProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
