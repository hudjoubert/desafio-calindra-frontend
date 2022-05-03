import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { Suggestion } from '../product/suggestion';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[] = [];
  suggestions: Suggestion[]= [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getSuggestions();
  }

  searchProducts(termo: any): void {
    this.productService.search(termo)
  }

  getSuggestions(): void {
    this.productService.getSuggestions().subscribe(suggestions => {
      this.suggestions = suggestions.suggestions;
    });
  }

}
