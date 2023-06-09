import { Component } from '@angular/core';
import { IComment } from 'src/app/interface/IComments';
import { CommentsService } from 'src/app/service/admin/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  constructor(private CommentsService: CommentsService) {}
  comments: IComment[] = [];
  getFormattedDateTime(timestamp: number | undefined): string {
    if (!timestamp) {
      return ''; // Trả về một giá trị mặc định hoặc chuỗi trống nếu timestamp không tồn tại
    }
    
    const milliseconds = timestamp * 1000;
    const date = new Date(milliseconds);
    const formattedDateTime = date.toLocaleString(); // Định dạng ngày tháng theo ngôn ngữ và thiết lập vùng dữ liệu của máy tính
    return formattedDateTime;
  }
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
