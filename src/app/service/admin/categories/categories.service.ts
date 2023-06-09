import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http'
import { ICate } from 'src/app/interface/Categories';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ICate[]>{
    return this.http.get<ICate[]>(`http://localhost:1337/categories`)
  }
  deleteProduct(id: string): Observable<ICate[]> {
    return this.http.delete<ICate[]>(`http://localhost:1337/categories/${id}`)
  }
  addCategory(category: ICate): Observable<ICate> {
    return this.http.post<ICate>(`http://localhost:1337/categories`, category)
  }
  updateCategory(category: ICate): Observable<ICate> {
    return this.http.put<ICate>(`http://localhost:1337/categories/${category.id}`, category)
  }
  getCategories(id: string): Observable<ICate> {
    return this.http.get<ICate>(`http://localhost:1337/categories/${id}`)
  }
}
