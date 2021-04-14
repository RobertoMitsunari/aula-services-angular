import { CursoServService } from './../curso1/curso-serv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'curso2',
  templateUrl: './curso2.component.html',
  styleUrls: ['./curso2.component.css'],
  providers: [CursoServService]
})
export class Curso2Component implements OnInit {
  cursos:String[];
  constructor(private cursoService:CursoServService) {
    this.cursos = cursoService.getCursos();
   }

  ngOnInit(): void {
    CursoServService.emitirCursoJaCriado.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
