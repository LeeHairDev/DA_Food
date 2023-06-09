import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICate } from 'src/app/interface/Categories';

import { CategoriesService } from 'src/app/service/admin/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private categoriesService: CategoriesService) {}
  categories: ICate[] = [];
  ngOnInit(): void {
    this.categoriesService.getData().subscribe(
      (data) => {
        this.categories = data.map((item: any) => item);
        
      },
      (error) => console.log(error.message)
    );
  }
  removeItem(id: any) {
    // xoa API
    this.categoriesService.deleteProduct(id).subscribe(() => {
      // reRender
      this.categories = this.categories.filter((item) => item.id !== id);
    });
    // this.onRemove.emit(id);
  }
}
