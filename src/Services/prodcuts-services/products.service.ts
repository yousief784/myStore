import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/Model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private dataApi: string = `/assets/data.json`;
  constructor(private http: HttpClient) {}

  getAllProducts = () => {
    return this.http.get(this.dataApi);
  };
}
