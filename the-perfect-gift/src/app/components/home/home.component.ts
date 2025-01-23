import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
