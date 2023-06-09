import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private userservice: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  userForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
  });
  onHandleSubmit() {
    if (this.userForm.valid) {
      const User: any = {
        name: this.userForm.value.name || '',
        email: this.userForm.value.email || '',
        password: this.userForm.value.password || '',
      };
      this.userservice.singup(User).subscribe(
        async (response: any) => {
          if (response.error) {
            alert(response.message);
          } else {
            alert('Đăng ký thành công, vui lòng đăng nhập');
            this.router.navigate(['/dangnhap']);
          }
        },
        (error: any) => {}
      );
    }
  }
}
