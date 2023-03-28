import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product.model";
import {ProductsService} from "./services/product.service";

@Component({
  selector: 'app-root',
  template: `
    <app-product-card *ngFor="let product of (products | sortByDate:'desc')" [product]="product"></app-product-card>
    <mat-slider min="1" max="100" step="1">
      <input matSliderThumb>
    </mat-slider>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  products!: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.products;
  }
  title = 'test_angular';
}
