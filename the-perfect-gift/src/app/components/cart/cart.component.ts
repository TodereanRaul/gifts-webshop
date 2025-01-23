import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeFromCart(itemId: string): void {
    this.cartService.removeFromCart(itemId);
    this.loadCart(); // Refresh the cart
  }

  calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.prix, 0);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart(); // Clear and refresh the cart
  }

  checkout(): void {
    // Navigate to checkout or trigger a process
    alert('Proceeding to checkout...');
  }
}
