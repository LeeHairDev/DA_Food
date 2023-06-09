import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css'],
  providers: [MessageService],
})
export class DangnhapComponent {
  constructor(
    private userservice: UsersService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {}
  userForm = this.fb.group({
    email: [''],
    password: [''],
  });
  onHandleSubmit() {
    if (this.userForm.valid) {
      const User: any = {
        email: this.userForm.value.email || '',
        password: this.userForm.value.password || '',
      };
      this.userservice.singin(User).subscribe(
        async (response: any) => {
          if (response.error) {
            alert(response.message);
          } else {
            const token: any = response.accessToken;
            localStorage.setItem('accessTokent', token);
            const inForUser: any = await jwt_decode(token);
            alert(response.message);
            console.log(inForUser);
            if (inForUser.role == 'admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/home']);
            }
          }
        },
        (error: any) => {}
      );
    }
  }
}
