import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http'
import { IComment } from 'src/app/interface/IComments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getData(): Observable<IComment[]>{
    return this.http.get<IComment[]>(`http://localhost:1337/comments`)
  }
  deleteProduct(id: string): Observable<IComment[]> {
    return this.http.delete<IComment[]>(`http://localhost:1337/comments/${id}`)
  }
  addProduct(Product: IComment): Observable<IComment> {
    return this.http.post<IComment>(`http://localhost:1337/comments`, Product)
  }
  updateProduct(Product: IComment): Observable<IComment> {
    return this.http.post<IComment>(`http://localhost:1337/comments/${Product.id}`, Product)
  }
  getCategories(id: string): Observable<IComment> {
    return this.http.get<IComment>(`http://localhost:1337/comments/${id}`)
  }
}
