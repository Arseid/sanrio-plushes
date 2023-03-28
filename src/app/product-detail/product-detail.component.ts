import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit {
  myProduct!: Product;
  id!: number;
  orientation!: string;

  constructor(private productService: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
  }

  ngOnInit(){
    this.myProduct = this.productService.getOneProduct(this.id);
    this.orientation = "landscape";
  }

  onLike() {
    this.productService.onLikeProduct(this.myProduct)
  }

}
