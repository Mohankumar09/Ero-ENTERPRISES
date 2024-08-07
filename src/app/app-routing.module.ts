import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolywoodProductsComponent } from './polywood-products/polywood-products.component';


import { EroProductsComponent } from './ero-products/ero-products.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'polywood-products', component: PolywoodProductsComponent },
  
  { path: 'ero-products', component: EroProductsComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/polywood-products', pathMatch: 'full' },
  { path: '**', redirectTo: '/polywood-products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
