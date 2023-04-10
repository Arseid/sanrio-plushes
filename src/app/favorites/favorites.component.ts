import { Component } from '@angular/core';
import {FavoriteProductsService} from "../services/favorite-products.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favorites: Product[] = [];

  constructor(private favoritesService: FavoriteProductsService) {
  }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

}
