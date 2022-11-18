import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {

  product : Product = {
    IdProduct: 0,
    Name: '',
    UnitValue: 0,
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private productsServices: ProductsService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.productsServices.getProduct(id)))
      .subscribe((dataresponse) => {
        this.product = dataresponse;
      });
  }

  actualizarProducto(){
    this.productsServices.putProduct(this.product.IdProduct,this.product)
    .subscribe(dataresponse => {
      this.mostrarSnackbar(`se ha actulizado el producto: '${this.product.Name}'`)
      this.router.navigate(['/sales/product'])
    })
  }

  eliminarProducto(){
    this.productsServices.deleteProduct(this.product.IdProduct)
    .subscribe(dataresponse=>{
      this.mostrarSnackbar(`se ha eliminado el producto: '${this.product.Name}'`)
    })
    this.router.navigate(['/sales/product'])
  }

  mostrarSnackbar(mensaje: string){
    this.snackbar.open(mensaje, 'Cerrar',{duration: 3000})
  }
}
