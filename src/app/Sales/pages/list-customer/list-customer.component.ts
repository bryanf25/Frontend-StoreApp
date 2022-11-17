import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css'],
})
export class ListCustomerComponent implements OnInit {
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Celular','Accion']
  customers: Customer[] = [];
  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
      console.log(this.customers)
    });
  }
}
