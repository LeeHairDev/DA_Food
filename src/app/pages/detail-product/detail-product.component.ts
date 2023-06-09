import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products/products.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getData(id).subscribe(product => {
      this.product = product 
    });
    
  }
  getCategoryNames() {
    return this.product.categories.map((category: any) => category.name).join(', ');
  }
}
