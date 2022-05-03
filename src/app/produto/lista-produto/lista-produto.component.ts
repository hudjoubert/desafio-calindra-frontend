import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { FilterProductPipe } from 'src/app/filter-product.pipe';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  termo: string = '';
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();

    this.produtoService.termo.subscribe(termo => {
      this.termo = termo
    })

  }

  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos.products;
    });
  }

}
