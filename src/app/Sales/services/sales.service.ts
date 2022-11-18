import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DetailSale } from '../interfaces/detailSale.interface';
import { Sale } from '../interfaces/sale.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private Baseurl: string = 'http://localhost:4508/api';

  constructor(private httpcliente: HttpClient) { }


  postDetailSale(detailSale: DetailSale){
    return this.httpcliente.post(`${this.Baseurl}/DetailSale`,detailSale)
  }

  postSale(sale : Sale){
    return this.httpcliente.post(`${this.Baseurl}/Sale`,sale)
  }

  getSales():Observable<Sale[]>
  {
    return this.httpcliente.get<Sale[]>(`${this.Baseurl}/Sale`)
  }
}
