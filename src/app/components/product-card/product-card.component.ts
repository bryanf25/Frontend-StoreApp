import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { DetailSale } from 'src/app/Sales/interfaces/detailSale.interface';
import { Product } from 'src/app/Sales/interfaces/product.interface';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() productsale = new EventEmitter<DetailSale>();

  detailSale: DetailSale = {
    IdDetailSale: 0,
    IdProduct: 0,
    Count: 0,
    DetailSale_IdSale: 0,
    Sale: null,
    Product: null,
  };

  countunits: number = 0;

  constructor(private snackBar:MatSnackBar) {}

  ngOnInit(): void {}

  createProductoToSell(id: number){
    this.detailSale = {
      IdDetailSale: 0,
      IdProduct: id,
      Count: this.countunits,
      DetailSale_IdSale: 0,
    };
  }

  addProduct() {
    this.createProductoToSell(this.product.IdProduct)
    this.productsale.emit(this.detailSale);
    this.snackBar.open(`acabas de agregar al carrito: '${this.countunits} ${this.product.Name}'`, 'Cerrar',{duration: 3000})
    this.countunits = 0;
  }




}
