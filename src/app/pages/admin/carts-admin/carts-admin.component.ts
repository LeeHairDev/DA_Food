import { Component } from '@angular/core';
import { CartsService } from 'src/app/service/admin/cart/carts.service';

@Component({
  selector: 'app-carts-admin',
  templateUrl: './carts-admin.component.html',
  styleUrls: ['./carts-admin.component.css']
})
export class CartsAdminComponent {
  constructor(private CartsService: CartsService) {}
  carts: any[] = [];
  ngOnInit(): void {
    this.CartsService.getData().subscribe(
      (data) => {
        this.carts = data.map((item: any) => item);
        console.log(data);
        
      },
      (error) => console.log(error.message)
    );
  }
  removeItem(id: any) {
    // xoa API
    this.CartsService.deleteProduct(id).subscribe(() => {
      // reRender
      this.carts = this.carts.filter((item) => item.id !== id);
    });
    // this.onRemove.emit(id);
  }
}
