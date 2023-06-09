import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoriesService } from 'src/app/service/admin/categories/categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICate } from 'src/app/interface/Categories';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  category: ICate = {
    name: ""
  };
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.categoryForm = this.formBuilder.group({
      name: ['']
    });

    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.categoryService.getCategories(id).subscribe(category => {
        this.category = category;
        this.categoryForm.patchValue({
          name: category.name
        });console.log(this.category);
        
      });
    });
  }

  onHandleSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }

    const updatedCategory: ICate = {
      id: this.category.id,
      name: this.categoryForm.value.name || ''
    };

    this.categoryService.updateCategory(updatedCategory).subscribe(data => {
      console.log(data);
    });
  }
}
