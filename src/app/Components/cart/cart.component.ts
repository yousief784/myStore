import { Component, OnInit, Input } from '@angular/core';
import {CartService} from "../../Services/Cart/cart-service.service";
import {Cart} from "../../Model/cart";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  total: number;
  isCartEmpty: boolean;
  @Input() confirmTotal = this.cartService.cart.total
  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
    this.total = this.cart.total

    this.isCartEmpty =  this.cart.products.length > 0
  }

  ngOnInit(): void {
  }
  removeFromCart = (productId: number)=>{
    this.cartService.removeFromCart(productId);
    if(this.cartService.cart.total == 0) !this.isCartEmpty
  }

  changeAmount = (event: any, productId: number)=>{
    this.cartService.updateProductAmountFromCart(productId, event.target.value);
  }
}
