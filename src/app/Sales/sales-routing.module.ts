import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListSalesComponent } from './pages/list-sales/list-sales.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'product/:id',
        component: EditProductComponent,
      },
      {
        path: 'customer',
        component: ListCustomerComponent,
      },
      {
        path: 'customer/:id',
        component: EditCustomerComponent,
      },
      {
        path: 'list',
        component: ListSalesComponent,
      },
      {
        path: '**',
        redirectTo: 'product',
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[
    RouterModule
  ]
})
export class SalesRoutingModule {}
