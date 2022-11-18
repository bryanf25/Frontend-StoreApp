import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './pages/product/product.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { SalesRoutingModule } from './sales-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../Material/material.module';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PurchaseSummaryComponent } from '../components/purchase-summary/purchase-summary.component';
import { ListSalesComponent } from './pages/list-sales/list-sales.component';



@NgModule({
  declarations: [
    ProductComponent,
    ListCustomerComponent,
    EditProductComponent,
    EditCustomerComponent,
    HomeComponent,
    ProductCardComponent,
    PurchaseSummaryComponent,
    ListSalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SalesRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SalesModule { }
