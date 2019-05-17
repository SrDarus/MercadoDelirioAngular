import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//model
import { Categoria } from '../../models/categoria'

//services
import { RepositoryService } from '../../services/repository.service';
import { CategoriaService } from '../../services/categoria.service';



@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  /*private categoria = [
  { idCategoria:0  },
  { nombre:""},
  { descripcion:""},
  ];*/

  txtAviso:String;
  actionAviso:boolean;


  private _categoria:Categoria = new Categoria(0,' ',' ');
test:string = "atest"
  constructor( private rep: RepositoryService,
               private servCategoria: CategoriaService,
    private router: Router) { }

  ngOnInit() {
    this._categoria = this.rep.categoria;
    this.actionAviso = false;
    //console.log(this._categoria)
  }

  get categoria(){
    return this._categoria
  }

  grabarCategoria(){

    this.servCategoria.grabarCategoria(this.categoria.nombre, this.categoria.descripcion)
    .subscribe((resp)=>{

      if(resp>0){
        this.actionAviso = true;
        this.txtAviso = "Registrado correctamente";
      }

      console.log(resp)
    });
  }

}
