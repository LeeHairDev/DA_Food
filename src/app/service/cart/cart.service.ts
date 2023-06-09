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
    // console.log(this.cartItems);
    
    this.cartSubject.next(this.cartItems);
    // console.log(this.cartSubject);
    
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next(this.cartItems);
    }
  }

  getCartItems(): BehaviorSubject<any[]> {
    return this.cartSubject;
  }
}
