import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './pages/product/product.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { SalesRoutingModule } from './sales-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../Material/material.module';



@NgModule({
  declarations: [
    ProductComponent,
    ListCustomerComponent,
    EditProductComponent,
    EditCustomerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MaterialModule
  ]
})
export class SalesModule { }
