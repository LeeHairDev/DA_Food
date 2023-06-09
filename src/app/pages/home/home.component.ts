import { Component } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import { IProduct } from 'src/app/interface/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: IProduct[] = [];
  allProducts: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  selectedCategory: string | null = null;

  constructor(private productService: ProductsService) {}
  
  ngOnInit(): void {
    this.loadLatestProducts();
    this.loadProducts();
  }
  loadProducts(): void {
    this.productService.getDatas().subscribe(products => {
      
      this.allProducts = products;
      this.filteredProducts = products.slice(0, 8);
    });
  }
  loadLatestProducts(): void {
    this.productService.getDatas().subscribe(
      (data) => {
        this.products = data.slice(0, 8);
      },
      (error) => console.log(error.message)
    );
  }
  filterProductsByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProducts = this.allProducts.slice(0, 8);
    } else {
      this.filteredProducts = this.allProducts.filter(product => product.categories === category
      ).slice(0, 8);
    }
  }
  log(value: any){
    console.log(value);
    
    }
}
