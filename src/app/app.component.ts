import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product.model";

@Component({
  selector: 'app-root',
  template: `
    <app-product-card *ngFor="let product of products" [product]="product"></app-product-card>
    <mat-slider min="1" max="100" step="1" value="50">
      <input matSliderThumb>
    </mat-slider>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  products!: Product[];

  ngOnInit() {
    this.products = [
        new Product(
        'Kuromi Plush',
        'Plush of Kuromi, leader of a biker gang known as \"Kuromi\'s 5\".',
        [47.95, 59.99],
        'https://cdn.shopify.com/s/files/1/0568/2298/8958/products/Kuromi-Plush-_Standard_-M-Japan-Figure-4550337050316-0_592x592.jpg?v=1634268901',
        0,
        false,
        ["Petit","Grand"]
      ),
      new Product(
          'Hello Kitty Plush',
          'Plush of Hello kitty, also known as \"Kitty White\".',
          [32.95, 44.99],
          'https://cdn.shopify.com/s/files/1/0568/2298/8958/products/Hello-Kitty-Plush-Toy-_Standard_-S-Japan-Figure-4901610504161-0_592x592.jpg?v=1634268404',
          0,
          false,
          ["Petit","Grand"]
      )
    ]
  }
  title = 'test_angular';
}
