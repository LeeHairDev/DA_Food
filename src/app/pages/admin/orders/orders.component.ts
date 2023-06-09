import { Component } from '@angular/core';
import { OrdersService } from 'src/app/service/admin/orders/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private CommentsService: OrdersService) {}
  comments: any[] = [];
  
  ngOnInit(): void {
    
    this.CommentsService.getData().subscribe(
      (data) => {
        this.comments = data.map((item: any) => item);
        console.log(this.comments);
        
        
      },
      (error) => console.log(error.message)
    );
  }
  removeItem(id: any) {
    // xoa API
    this.CommentsService.deleteProduct(id).subscribe(() => {
      // reRender
      this.comments = this.comments.filter((item) => item.id !== id);
    });
    // this.onRemove.emit(id);
  }
}
