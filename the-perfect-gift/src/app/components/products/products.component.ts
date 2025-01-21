import { Component, inject, OnInit } from '@angular/core';
import { ProductsFirebase } from '../../services/productsFirebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductsFirebase], // Provide the service here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'], // Fixed typo
})
export class ProductsComponent implements OnInit {
  productFirebaseService = inject(ProductsFirebase);
  products: any[] = [];

  ngOnInit(): void {
    this.productFirebaseService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
