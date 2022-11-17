import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private Baseurl: string = 'http://localhost:4508/api/Product';

  constructor(private httpcliente: HttpClient) {}

  getProducts(): Observable<Product[]>{
   return  this.httpcliente.get<Product[]>(this.Baseurl);
  }

  getProduct(idproduct :number): Observable<Product>{
    return this.httpcliente.get<Product>(`${this.Baseurl}/${idproduct}`);
  }

  putProduct(idproduct: number, product:Product): Observable<Product>{
    return this.httpcliente.put<Product>(`${this.Baseurl}/${idproduct}`,product);
  }
  deleteProduct(idproduct: number){
    return this.httpcliente.delete<Product>(`${this.Baseurl}/${idproduct}`);
  }
}
