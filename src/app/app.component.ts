import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product.model";
import {ProductsService} from "./services/product.service";

@Component({
  selector: 'app-root',
  template: `
    <div>Chercher : <input type="text" id="search" name="search" [(ngModel)]="search"/></div>
    <div>La recherche {{search}}</div>
    <app-product-card *ngFor="let product of (products | sortByDate:'desc' | filterBySearch:search)" [product]="product">
    </app-product-card>
    <mat-slider min="1" max="100" step="1">
      <input matSliderThumb>
    </mat-slider>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  products!: Product[];
  search: string = '';
  title: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.search = "";
    this.products = this.productsService.products;
    this.title = 'Sanrio Products';
  }
}
