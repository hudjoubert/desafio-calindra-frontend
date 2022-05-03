import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], termo: string): Product[] {
    const produtcs = value.filter((produtcsResearched: any) => {
      return produtcsResearched.name.toLowerCase().includes(termo);
    });
    return produtcs;
  }

}
