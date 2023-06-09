import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import {HttpClient} from '@angular/common/http'
import { ICate } from '../../interface/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCate(): Observable<ICate[]>{
    return this.http.get<ICate[]>(`http://localhost:1337/categories`)
  }
}
