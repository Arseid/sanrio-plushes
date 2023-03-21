import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product.model";

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(products: Product[]) {
    return products.sort((a, b) => {return b.plubicationDate.getTime() - a.plubicationDate.getTime()});
  }

}
