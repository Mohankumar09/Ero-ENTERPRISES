import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PolywoodProductsComponent } from './polywood-products/polywood-products.component';
import { EroProductsComponent } from './ero-products/ero-products.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { NgxCarouselModule } from 'ngx-carousel'; // Import NgxCarouselModule

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PolywoodProductsComponent,
    EroProductsComponent,
    AccessoriesComponent,
    AboutUsComponent,
    ContactUsComponent,
    GalleryComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
