import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product.model";

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      if (desc) return b.publicationDate.getTime() - a.publicationDate.getTime();
      else return a.publicationDate.getTime() - b.publicationDate.getTime()
    });
  }

}
