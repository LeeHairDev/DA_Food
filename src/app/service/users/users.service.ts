import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface IUser {
  name:string,
  email: string,
  password: string,
  confirmPassword: string,
  address: string,
  phone: string
  role?: string, 
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {

   }
   singup(user:IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:1337/auth/register`, user);
  }
   singin(user:IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:1337/auth/login`, user);
  }
}