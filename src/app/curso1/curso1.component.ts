
import { Component, OnInit } from '@angular/core';
import { CursoServService } from './curso-serv.service';

@Component({
  selector: 'curso1',
  templateUrl: './curso1.component.html',
  styleUrls: ['./curso1.component.css'],
  providers: [CursoServService]
})
export class Curso1Component implements OnInit {
  cursos: string[];
  constructor(private cursoServe:CursoServService) {
    this.cursos = cursoServe.getCursos();
   }
  addCurso(curso: string){
    this.cursoServe.addCurso(curso);
  }
  ngOnInit(): void {
  }

}
