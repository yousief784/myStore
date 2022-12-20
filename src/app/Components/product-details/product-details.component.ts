import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Services/Cart/cart-service.service';
import { ProductsService } from '../../Services/prodcuts-services/products.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  product: any;
  allProducts: any;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.id = 0;
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.productsService.getAllProducts().subscribe((res) => {
      this.allProducts = res;
      this.product = this.allProducts.filter(
        (data: any) => data.id == this.id
      )[0];
    });
  }

  ngOnInit(): void {}

  formSubmit(){
    if (
      this.cartService.checkIfProductExistInCart(this.product.id)) {
      this.cartService.updateProductAmountInCart(this.product.id, 1);
      return;
    }
    else{
      this.cartService.addProductToCart(this.product)
    }
  }
}
