import { Component, OnInit } from '@angular/core';
import { PesquisarService } from '../pesquisar.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  produtos: any[] = [];

  constructor(private pesquisarService: PesquisarService) { }

  ngOnInit(): void {
  }

  getProdutos(): void {
    this.pesquisarService.getProdutos().subscribe(produtos => {
      this.produtos = produtos
      console.log(produtos);

    });
  }

}
