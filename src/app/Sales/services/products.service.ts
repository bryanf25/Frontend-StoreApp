import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private Baseurl: string = 'http://localhost:4508/api/';

  constructor(private httpcliente: HttpClient) {}

  getProducts(): Observable<Product[]>{
   return  this.httpcliente.get<Product[]>(`${this.Baseurl}Product`);
  }
}
