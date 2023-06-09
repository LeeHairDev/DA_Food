import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ProductsService } from 'src/app/service/admin/products/products.service';
import { AIproduct } from 'src/app/interface/AProduct';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  product: AIproduct = {
    name: '',
    description: '',
    image: '',
    price: 0,
    size: '',
    calo: '',
    categories: '',
  };
  productForm: FormGroup;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      description: [''],
      image: [''],
      price: [0],
      size: [''],
      calo: [''],
      idCategory: [''],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.productService.getCategories(id).subscribe((product) => {
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price,
          size: product.size,
          calo: product.calo,
          idCategory: product.categories,
        });
      });
    });
  }

  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const updatedProduct: AIproduct = {
      id: this.product.id,
      name: this.productForm.value.name || '',
      description: this.productForm.value.description || '',
      image: this.productForm.value.image || '',
      price: this.productForm.value.price || 0,
      size: this.productForm.value.size || '',
      calo: this.productForm.value.calo || '',
      categories: this.productForm.value.idCategory || '',
    };

    this.productService.updateProduct(updatedProduct).subscribe((data) => {
      alert('Product updated successfully!');
    });
  }
}
