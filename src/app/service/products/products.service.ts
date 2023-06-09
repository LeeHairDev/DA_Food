import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http'
import { IProduct } from 'src/app/interface/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getDatas(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:1337/products`)
  }

  getData(id: string  | null): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:1337/products/${id}`)
  }

  getLatestProducts(): Observable<IProduct[]> {
    
    return this.http.get<IProduct[]>(`http://localhost:1337/products?_sort=createdAt:desc&_limit=8`);
  }
  
}
