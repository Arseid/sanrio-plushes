import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product.model";

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      if (desc) return b.plubicationDate.getTime() - a.plubicationDate.getTime();
      else return a.plubicationDate.getTime() - b.plubicationDate.getTime()
    });
  }

}
