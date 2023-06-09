import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: IProduct[] = [];
    constructor(private productService: ProductsService, private cartService: CartService){}
  ngOnInit() : void{
       this.productService.getDatas().subscribe((data)=>{       
         this.products = data;
         
       }, error => console.log(error.message)
      )
     
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);
    console.log(this.cartService);

  }
  page: number = 1;
  count: number = 0;
  tableSize: number = 16;
  tableSizes: any = [3, 6, 9, 12];

  onTableDataChange(event: any) {
    this.page = event;
    this.products;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.products;
  }

  log(value: any){
    console.log(value);
    
  }
}

