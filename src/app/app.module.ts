import { NgModule ,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HttpClientModule } from "@angular/common/http";

import localEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localEs, 'es');


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
