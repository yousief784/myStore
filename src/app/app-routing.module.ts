import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import {ConfirmationComponent} from "./Components/confirmation/confirmation.component";

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirmation', component: ConfirmationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
