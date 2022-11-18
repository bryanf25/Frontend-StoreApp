import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Customer } from '../../interfaces/customer.interface';
import { CustomersService } from '../../services/customers.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer :Customer={
    Cedula:   0,
    Name:     ''
  };
  constructor(private customersService : CustomersService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(switchMap(({id})=> this.customersService.getCustomer(id)))
    .subscribe(data =>{
      this.customer= data;
    })
  }

  actualizarCliente(){
    this.customersService.putCustomer(this.customer.Cedula, this.customer).subscribe((responsedata) =>{
      this.mostrarSnackbar(`se ha actulizado el cliente: '${this.customer.Name} ${this.customer.LastName}'`)
      this.router.navigate(['/sales/customer'])
    })
  }

  eliminarCliente(){
    this.customersService.deleteCustomer(this.customer.Cedula)
    .subscribe( resp =>{
      this.mostrarSnackbar(`se ha eliminado el cliente: '${this.customer.Name} ${this.customer.LastName}'`)
    })
    this.router.navigate(['/sales/customer'])
  }

  mostrarSnackbar(mensaje: string){
    this.snackbar.open(mensaje, 'Cerrar',{duration: 3000})
  }

}
