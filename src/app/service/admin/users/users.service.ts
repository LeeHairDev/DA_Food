import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http'
import { IUser } from 'src/app/interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 constructor(private http: HttpClient) { }
  getData(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`http://localhost:1337/customers`)
  }
  deleteProduct(id: string): Observable<IUser[]> {
    return this.http.delete<IUser[]>(`http://localhost:1337/customers/${id}`)
  }
  addProduct(Product: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:1337/customers`, Product)
  }
  updateProduct(Product: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:1337/customers/${Product.id}`, Product)
  }
  getCategories(id: string): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:1337/customers/${id}`)
  }
}
