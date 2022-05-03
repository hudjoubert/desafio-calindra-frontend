import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FilterProductPipe } from 'src/app/product/filter-product.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  produtos: Product[] = [];
  term: string = '';
  alert: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProdutos();

    this.productService.term.subscribe(term => {this.term = term});
    this.productService.alert.subscribe(alert => this.alert = alert);
  }

  getProdutos(): void {
    this.productService.getProdutos().subscribe(produtos => {
      this.produtos = produtos.products;
      if(this.produtos === []) {
        this.sendAlert();
      }
    });
  }

  sendAlert() {
    this.productService.sendAlert('Produto não encontrado!!!')
  }

}
