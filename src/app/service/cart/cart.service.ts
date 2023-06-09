import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.cartItems);

  constructor() { }

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): BehaviorSubject<any[]> {
    return this.cartSubject;
  }
}
