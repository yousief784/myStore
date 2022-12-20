import { Injectable } from '@angular/core';
import { Cart } from '../../Model/cart';
import { Product } from '../../Model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = { products: [], total: 0 };
  constructor() {}

  addProductToCart = (product: Product) => {
    product.amount = 1
    this.cart.products.push(product);
    if (product.amount) this.cart.total += product.amount * product.price;
  };

  updateProductAmountInCart = (productId: number, amount: number) => {
    this.cart.products.map((product, index) => {
      if (product.id == productId && product.amount) {
        this.cart.products[index].amount =
          parseInt(this.cart.products[index].amount as unknown as string) +
          parseInt(amount as unknown as string);

        this.cart.total += amount * product.price
      }
    });
  };

  checkIfProductExistInCart = (productId: number) => {
    let productExist: boolean = false;
    this.cart.products.map((product: any) => {
      if (product.id === productId) productExist = true;
    });

    if(productExist) return true;
    return false;
  };

  updateProductAmountFromCart = (productId: number, amount: number) => {
    this.cart.total = 0
    this.cart.products.map((product, index) => {
      if (product.id == productId) {
        this.cart.products[index].amount = parseInt(amount as unknown as string);
      }
      console.log(this.cart)
      // @ts-ignore
      this.cart.total += product.amount * product.price
    });
  };

  removeFromCart = (productId: number) => {
    this.cart.products = this.cart.products.filter((product) => product.id != productId)
    this.updateProductAmountFromCart(0, 0)
  }


}
