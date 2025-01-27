import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../types';
import { ProductsFirebase } from '../../../services/productsFirebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent implements OnInit{

  productId: string | null = null; // Explicit null initialization
  product: Product | undefined; // Product object
  currentImageIndex: number = 0; // Index for image carousel
  initialQuantity = 1; // Initial quantity for quantity selector
  productFirebaseService = inject(ProductsFirebase);
  

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Fetch product ID from the route
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      // Retrieve product data using the ProductService
      this.productFirebaseService.getProductById(this.productId).subscribe({
        next: (data: Product | undefined) => {
          this.product = data;

          // Handle missing image URLs by providing a default image
          if (
            this.product &&
            (!this.product.imageUrls || this.product.imageUrls.length === 0)
          ) {
            this.product.imageUrls = [
              `https://via.placeholder.com/600x400?text=${encodeURIComponent(
                this.product.name || 'No Image'
              )}`,
            ];
          }
        },
        error: (err: any) => {
          console.error('Error fetching product:', err);
          this.router.navigate(['/shop']); // Redirect to shop in case of an error
        },
      });
    } else {
      // Redirect to the shop if no product ID is found
      this.router.navigate(['/shop']);
    }
  }

  /**
   * Navigate to the previous image in the product's image carousel.
   */
  prevImage(): void {
    if (this.product?.imageUrls?.length) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.product.imageUrls.length) %
        this.product.imageUrls.length;
    }
  }

  /**
   * Navigate to the next image in the product's image carousel.
   */
  nextImage(): void {
    if (this.product?.imageUrls?.length) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.product.imageUrls.length;
    }
  }

  /**
   * Get text description for a customization value (interior or exterior).
   * @param value The customization value (0 to 3).
   * @returns A description of the customization option.
   */
  getCustomizationText(value: number): string {
    switch (value) {
      case 1:
        return 'Text Only';
      case 2:
        return 'Image Only';
      case 3:
        return 'Text and Image';
      default:
        return 'None';
    }
  }


  /**
   * Handle quantity change from the QuantitySelectorComponent.
   * @param newQuantity The new quantity selected by the user.
   */
  onQuantityChange(newQuantity: number): void {
    console.log('New Quantity:', newQuantity);
  }
}
