import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso1Component } from './curso1.component';
import { CursoServService } from './curso-serv.service';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';



@NgModule({
  declarations: [
    Curso1Component,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Curso1Component
  ]//,
 //providers: [CursoServService]
})
export class Curso1Module { }
