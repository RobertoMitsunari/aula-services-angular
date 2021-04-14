
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursoServService {
  cursos:string[] = ['HONSHOU','MARINE',"DESU~~"];
  emitirCursoCriado = new EventEmitter<string>();
  static emitirCursoJaCriado = new EventEmitter<string>();
  constructor() { 
    console.log("Nasci");
  }

  getCursos(){
    return this.cursos;
  }
  addCurso(curso:string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoServService.emitirCursoJaCriado.emit(curso);
  }
}
