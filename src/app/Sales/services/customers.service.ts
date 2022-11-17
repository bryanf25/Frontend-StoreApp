import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpcliente: HttpClient) { }
  private Baseurl: string = 'http://localhost:4508/api/Customer';


  getCustomers(): Observable<Customer[]> {
    return this.httpcliente.get<Customer[]>(this.Baseurl)
  }

  getCustomer(idCustomer: number): Observable<Customer> {
    return this.httpcliente.get<Customer>(`${this.Baseurl}/${idCustomer}`)
  }

  putCustomer(idCustomer: number, customer:Customer): Observable<Customer>{
    return this.httpcliente.put<Customer>(`${this.Baseurl}/${idCustomer}`,customer);
  }
  deleteCustomer(idCustomer: number){
    return this.httpcliente.delete(`${this.Baseurl}/${idCustomer}`);
  }
}
