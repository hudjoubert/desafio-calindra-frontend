import { Produto } from './produto/produto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Produto[], termo: string): Produto[] {
    const teste3 = value.filter((produtoPesquisado: any) => {
      return produtoPesquisado.name.toLowerCase().includes(termo);
    });
    return teste3;
  }

}
