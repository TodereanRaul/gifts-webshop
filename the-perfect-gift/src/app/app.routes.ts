import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { GiftContactPageComponent } from './components/gift-contact-page/gift-contact-page.component';
import { GiftAboutUsPageComponent } from './components/gift-about-us-page/gift-about-us-page.component';
import { ProductDetailPageComponent } from './components/products/product-detail-page/product-detail-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: GiftContactPageComponent },
  { path: 'about-us', component: GiftAboutUsPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
];

