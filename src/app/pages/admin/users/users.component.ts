import { Component } from '@angular/core';
import { IUser } from 'src/app/interface/IUser';
import { UsersService } from 'src/app/service/admin/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private UsersService: UsersService) {}
  users: IUser[] = [];
  ngOnInit(): void {
    this.UsersService.getData().subscribe(
      (data) => {
        this.users = data.map((item: any) => item);
        
      },
      (error) => console.log(error.message)
    );
  }
  removeItem(id: any) {
    // xoa API
    this.UsersService.deleteProduct(id).subscribe(() => {
      // reRender
      this.users = this.users.filter((item) => item.id !== id);
    });
    // this.onRemove.emit(id);
  }
}
