import { Component, OnInit } from '@angular/core';
import { Sale } from '../../interfaces/sale.interface';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.css']
})
export class ListSalesComponent implements OnInit {
  displayedColumns: string[] = ['Factura', 'Cliente', 'Fecha', 'Total']
  sales: Sale[] = [];


  constructor(private saleService:SalesService) { }

  ngOnInit(): void {
    this.saleService.getSales().subscribe(response =>{
      this.sales = response;
    })
  }

}
