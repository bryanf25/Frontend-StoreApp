import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products! : Product[] ;

  constructor(private productsService : ProductsService ) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(response =>
      {
        console.log(response);
        this.products = response;
      }
      )

  }

}
