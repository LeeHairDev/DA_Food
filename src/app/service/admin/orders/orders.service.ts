import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:1337/orders`)
  }
  deleteProduct(id: string): Observable<any[]> {
    return this.http.delete<any[]>(`http://localhost:1337/orders/${id}`)
  }
}
