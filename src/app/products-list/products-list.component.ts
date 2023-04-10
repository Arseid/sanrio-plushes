import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products!: Product[];
  search: string = '';
  sortOrder: string = 'desc';
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  toggleSortOrder() {
    if (this.sortOrder==='desc'){
      this.sortOrder = 'asc';
    }
    else {
      this.sortOrder = 'desc';
    }
  }
}
