

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso2Component } from './curso2.component';
import { CursoServService } from '../curso1/curso-serv.service';




@NgModule({
  declarations: [
    Curso2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Curso2Component
  ]//,
  //providers: [CursoServService]
})
export class Curso2Module { }
