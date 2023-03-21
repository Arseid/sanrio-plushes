import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  selectedPrice = 0;

  onSizeSelected(e: any) {
    let priceIndex = this.product.size?.indexOf(e.target.value) || 0;
    this.selectedPrice = this.product.price[priceIndex];
  }

  onAddLike() {
    if (this.product.isLiked) {
      this.product.likes--;
      this.product.isLiked=false;
    }
    else {
      this.product.likes++;
      this.product.isLiked=true;
    }
  }

  ngOnInit(): void {
    this.selectedPrice=this.product.price[0];
  }

}
