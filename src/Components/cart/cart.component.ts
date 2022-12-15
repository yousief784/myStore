import { Component, OnInit } from '@angular/core';
import {CartService} from "../../Services/Cart/cart-service.service";
import {Cart} from "../../Model/cart";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  total: number;
  isCartEmpty: boolean;
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  constructor(private cartService: CartService, private route: Router) {
    this.cart = this.cartService.cart;
    this.total = this.cart.total

    this.isCartEmpty =  this.cart.products.length > 0
  }

  ngOnInit(): void {
  }

  formSubmit =()=>{
    this.route.navigate(['/confirmation'], {
      queryParams: {name: this.fullName, total: this.cartService.cart.total}
    })
  }

  removeFromCart = (productId: number)=>{
    this.cartService.removeFromCart(productId);
    if(this.cartService.cart.total == 0) !this.isCartEmpty
  }

  changeAmount = (event: any, productId: number)=>{
    this.cartService.updateProductAmountFromCart(productId, event.target.value);
  }
}
