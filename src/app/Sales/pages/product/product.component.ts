import { Component, OnInit } from '@angular/core';
import { DetailSale } from '../../interfaces/detailSale.interface';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseSummaryComponent } from 'src/app/components/purchase-summary/purchase-summary.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products!: Product[];
  invoice: DetailSale[] = [];

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  saleCart(saleproduct: DetailSale) {
    if (this.invoice.length === 0) {
      saleproduct.IdDetailSale = Math.round(Math.random() * 10000);
      saleproduct.DetailSale_IdSale = Math.round(Math.random() * 10000);
    } else {
      // const index = this.invoice.findIndex(element => saleproduct.IdProduct == element.IdProduct)
      // let invoicecopy = [...this.invoice];
      // invoicecopy[index] = {...invoicecopy[index], Count: invoicecopy[index].Count + saleproduct.Count}
      // this.invoice[index] = invoicecopy[index]
      // console.log('valor modificado:', this.invoice);
      // this.checkDuplicade(saleproduct);
      saleproduct.IdDetailSale = Math.round(Math.random() * 10000);
      saleproduct.DetailSale_IdSale = this.invoice[0].DetailSale_IdSale;
    }
    this.invoice.push(saleproduct);

  }

  // checkDuplicade(prod : DetailSale){
  //  const elemnt = this.invoice.find(element => (prod.IdProduct === element.IdProduct) this.invoice. )

  //  console.log(elemnt)
  // }

  showSummary(){
    this.dialog.open(PurchaseSummaryComponent,{
      width: '500px',
      data: this.invoice
      // enterAnimationDuration,
      // exitAnimationDuration,
    })
  }

  cleanCart(){
    this.invoice.splice(0,this.invoice.length)
  }

}
