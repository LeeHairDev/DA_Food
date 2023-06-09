import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';

import { ICate } from 'src/app/interface/Categories';

import { CategoriesService } from 'src/app/service/admin/categories/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
   
})
constructor(private formBuilder: FormBuilder,
    private categoriesService: CategoriesService) {

}
onFileSelected(event: any) {
}
onHandleSubmit() {
    if (this.categoryForm.invalid) {
        return;
    }

    const category: ICate = {

        name: this.categoryForm.value.name || ''
        
    }
    this.categoriesService.addCategory(category).subscribe(data => {
        alert('Thanh Cong')
    })
}
}
