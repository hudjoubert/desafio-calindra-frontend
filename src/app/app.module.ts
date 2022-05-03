import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { FilterProductPipe } from './filter-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    ListaProdutoComponent,
    FilterProductPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
