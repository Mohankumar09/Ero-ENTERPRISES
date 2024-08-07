import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EroProductsComponent } from './ero-products.component';

describe('EroProductsComponent', () => {
  let component: EroProductsComponent;
  let fixture: ComponentFixture<EroProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EroProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EroProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
