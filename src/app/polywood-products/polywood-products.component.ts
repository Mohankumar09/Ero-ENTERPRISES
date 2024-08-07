import { Component } from '@angular/core';

@Component({
  selector: 'app-polywood-products',
  templateUrl: './polywood-products.component.html',
  styleUrls: ['./polywood-products.component.css']
})
export class PolywoodProductsComponent {
  showCarousel = false;
  currentSlide = 0;
  imagesPerSlide = 3; // Make sure this property is declared
  currentGroupImages: string[] = [];
  currentImages: string[] = [];

  openCarousel(images: string[]): void {
    this.currentGroupImages = images;
    this.currentSlide = 0;
    this.showCarousel = true;
  }

  closeCarousel(): void {
    this.showCarousel = false;
  }

  
}
