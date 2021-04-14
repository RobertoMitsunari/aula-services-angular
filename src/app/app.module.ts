
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { Curso1Component } from './curso1/curso1.component';
import { Curso1Module } from './curso1/curso1.module';
//import { Curso2Component } from './curso2/curso2.component';
import { Curso2Module } from './curso2/curso2.module';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';
//import { CursoServService } from './curso1/curso-serv.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Curso1Module,
    Curso2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
