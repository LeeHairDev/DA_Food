import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
        this.cartItems = data;
        console.log(data);
    });
}

  
  // removeFromCart(item: any): void {
  //   this.cartService.removeFromCart(item);
  // }
  log(value: any){
    console.log(value);
    
  }
}
