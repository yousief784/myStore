import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/Components/navbar/navbar.component';
import { ProductListComponent } from 'src/Components/product-list/product-list.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from 'src/Components/product-details/product-details.component';
import {CartComponent} from "../Components/cart/cart.component";
import {ConfirmationComponent} from "../Components/confirmation/confirmation.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductListComponent, ProductDetailsComponent, CartComponent, ConfirmationComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
