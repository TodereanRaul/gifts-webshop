import { Component, inject, OnInit } from '@angular/core';
import { ProductsFirebase } from '../../services/productsFirebase.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductsFirebase, CartService], // Provide the services here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productFirebaseService = inject(ProductsFirebase);
  cartService = inject(CartService); // Inject CartService
  products: any[] = [];

  ngOnInit(): void {
    this.productFirebaseService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.nom} has been added to your cart.`);
  }
}
