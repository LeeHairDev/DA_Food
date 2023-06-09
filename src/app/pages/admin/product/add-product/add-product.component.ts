import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AIproduct } from 'src/app/interface/AProduct';

import { ProductsService } from 'src/app/service/admin/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0],
    description: ['', Validators.required],
    image: ['', Validators.required],
    size: ['', Validators.required],
    calo: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) {}

  onFileSelected(event: any) {
    // Xử lý sự kiện khi người dùng chọn tệp
  }

  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const product: AIproduct = {
      name: this.productForm.value.name || '',
      description: this.productForm.value.description || '',
      image: this.productForm.value.image || '',
      price: this.productForm.value.price !== null ? Number(this.productForm.value.price) : 0,
      size: this.productForm.value.size || '',
      calo: this.productForm.value.calo || '',
    };

    this.productService.addProduct(product).subscribe(data => {
      alert('Them product thanh cong');
      window.location.href='/admin/products'
    });
  }

  
}
