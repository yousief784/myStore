import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Model/product';
import { CartService } from 'src/Services/Cart/cart-service.service';
import { ProductsService } from 'src/Services/prodcuts-services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  displayStyle: string = 'none';
  allProducts: any;
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    this.productsService
      .getAllProducts()
      .subscribe((res) => (this.allProducts = res));
  }

  counter = (i: number) => {
    return new Array(i);
  };

  ngOnInit(): void {}

  formSubmit = (product: Product) => {
    if (
      this.cartService.checkIfProductExistInCart(product.id)) {
      this.cartService.updateProductAmountInCart(product.id, 1);
      return;
    }
    else{
      this.cartService.addProductToCart(product)
    }
  };
}
