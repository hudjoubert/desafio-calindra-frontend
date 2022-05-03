import { Suggestion } from './suggestion';
import { Product } from './product';

export interface ProductDTO {
  products: Product[];
  suggestions: Suggestion[];
}
