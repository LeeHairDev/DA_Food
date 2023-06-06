import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http'
import { IProduct } from 'src/app/interface/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getData(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:8080/api/products`)
  }
}
