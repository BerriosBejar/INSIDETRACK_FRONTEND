import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  private baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get(`${this.baseUrl}`);
  }



}
