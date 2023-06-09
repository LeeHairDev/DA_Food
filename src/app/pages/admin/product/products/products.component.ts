import { Component } from '@angular/core';
import { AIproduct } from 'src/app/interface/AProduct';

import { ProductsService } from 'src/app/service/admin/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private productService: ProductsService) {}
  products: AIproduct[] = [];
  ngOnInit(): void {
    this.productService.getData().subscribe(
      (data) => {
        this.products = data.map((item: any) => item);
        
      },
      (error) => console.log(error.message)
    );
  }
  removeItem(id: any) {
    // xoa API
    this.productService.deleteProduct(id).subscribe(() => {
      // reRender
      this.products = this.products.filter((item) => item.id !== id);
    });
    // this.onRemove.emit(id);
  }
}
