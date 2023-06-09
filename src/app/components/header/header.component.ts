import { Component } from '@angular/core';

import { CategoriesService } from '../../service/categories/categories.service';
import { ICate } from '../../interface/Categories';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories: ICate[] = [];
  
  constructor(private categoriesService: CategoriesService){}

  ngOnInit(): void {
    this.categoriesService.getCate().subscribe(
      (data) => {       
        this.categories = data;
      },
      (error) => console.log(error)
    );
  }
  
  log(value: any) {
    console.log(value);
  }
  
}

