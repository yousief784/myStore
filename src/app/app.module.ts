import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import {CartComponent} from "./Components/cart/cart.component";
import {ConfirmationComponent} from "./Components/confirmation/confirmation.component";
import { CheckOutFormComponent } from './Components/check-out-form/check-out-form.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ConfirmationComponent,
    CheckOutFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [],
})
export class AppModule {}
