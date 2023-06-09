import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http'
import { AIproduct } from 'src/app/interface/AProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getData(): Observable<AIproduct[]>{
    return this.http.get<AIproduct[]>(`http://localhost:1337/products`)
  }
  deleteProduct(id: string): Observable<AIproduct[]> {
    return this.http.delete<AIproduct[]>(`http://localhost:1337/products/${id}`)
  }
  addProduct(Product: AIproduct): Observable<AIproduct> {
    return this.http.post<AIproduct>(`http://localhost:1337/products`, Product)
  }
  updateProduct(Product: AIproduct): Observable<AIproduct> {
    return this.http.put<AIproduct>(`http://localhost:1337/products/${Product.id}`, Product)
  }
  getCategories(id: string): Observable<AIproduct> {
    return this.http.get<AIproduct>(`http://localhost:1337/products/${id}`)
  }
}