import { Sugestao } from './sugestao';
import { Produto } from './produto';

export interface ProdutoDTO {
  products: Produto[];
  suggestions: Sugestao[];
}
