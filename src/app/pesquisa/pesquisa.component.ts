import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  termoPesquisa!: string;
  produtos: Produto[] = [];
  sugestoes: any[]= [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getSugestoes();
  }

  pesquisarProdutos(termo: any): void {
    this.produtoService.pesquisar(termo)
  }

  getSugestoes(): void {
    this.produtoService.getSugestoes().subscribe(sugestoes => {
      this.sugestoes = sugestoes.suggestions;
    });
  }

}
