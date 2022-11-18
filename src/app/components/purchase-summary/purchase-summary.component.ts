import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/Sales/interfaces/customer.interface';
import { DetailSale } from 'src/app/Sales/interfaces/detailSale.interface';
import { Product } from 'src/app/Sales/interfaces/product.interface';
import { Sale } from 'src/app/Sales/interfaces/sale.interface';
import { CustomersService } from 'src/app/Sales/services/customers.service';
import { ProductsService } from 'src/app/Sales/services/products.service';
import { SalesService } from 'src/app/Sales/services/sales.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-purchase-summary',
  templateUrl: './purchase-summary.component.html',
  styleUrls: ['./purchase-summary.component.css'],
})
export class PurchaseSummaryComponent implements OnInit {
  products: Product[] = [];
  index: number = 0;
  totalsale: number = 0;
  datasale: DetailSale[] = [];
  customers: Customer[] = [];
  sale!: Sale;
  customerselected! : Customer;

  constructor(
    private dialogRef: MatDialogRef<PurchaseSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DetailSale[],
    private snackbar :MatSnackBar,
    private productsService: ProductsService,
    private customerService: CustomersService,
    private saleService: SalesService
  ) {}

  ngOnInit(): void {
    this.datasale = this.data;
    this.data.forEach((product, index) => {
      this.productsService
        .getProduct(product.IdProduct)
        .subscribe((responseprod) => {
          this.products.push(responseprod);
          this.totalsale += responseprod.UnitValue * this.datasale[index].Count;
        });
    });

    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response;
    });
  }

  sell() {
    console.log(this.data)
    this.sale = {
      IdSale: this.data[0].DetailSale_IdSale,
      Date: this.formatDate(),
      TotalValue: this.totalsale,
      Sale_Cedula: this.customerselected.Cedula
    }
    this.saleService.postSale(this.sale).subscribe(s => {
      console.log(s);
      this.data.forEach(detail =>  {
        this.saleService.postDetailSale(detail).subscribe(resp =>
          {
            console.log(resp)
          })
      })
    });


    this.mostrarSnackbar(`Venta realizada a: ${this.customerselected.Name} ${this.customerselected.LastName}`)

    this.dialogRef.close();
  }

  formatDate(): string{
    const date = new Date(Date.now()).toLocaleDateString();
    const arrdate = date.split('/');
    const stringdate = `${arrdate[2]}/${arrdate[1]}/${arrdate[0]}`
    return stringdate
  }

  customerSelected(customer:any){
    this.customerselected = customer;
  }

  mostrarSnackbar(mensaje: string){
    this.snackbar.open(mensaje, 'Cerrar',{duration: 3000})
  }

  cerrar() {
    this.dialogRef.close();
  }
}
