import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface CartItem {
  id: string;
  nom: string;
  prix: number;
  description?: string;
  personnalisations?: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if we are in a browser before accessing localStorage
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        try {
          this.cart = JSON.parse(storedCart);
        } catch (error) {
          console.error('Error parsing cart data from localStorage:', error);
        }
      }
    }
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  addToCart(item: CartItem): void {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.saveCart();
  }

  removeFromCart(itemId: string): void {
    this.cart = this.cart.filter((item) => item.id !== itemId);
    this.saveCart();
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  private saveCart(): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.prix * item.quantity,
      0
    );
  }

  updateItemQuantity(itemId: string, quantity: number): void {
    const item = this.cart.find((cartItem) => cartItem.id === itemId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(itemId); // Remove if quantity is 0 or less
      } else {
        this.saveCart();
      }
    }
  }
}
