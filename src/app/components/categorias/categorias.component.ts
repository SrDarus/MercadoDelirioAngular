import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { ProductService } from '../../services/product.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  private txtIdCategoria:number;
  private txtNombre:string;
  private txtDescripcion:string;

  private _categorias:any;

  constructor( private rep: RepositoryService, 
    private prodService: ProductService,
    public global: GlobalService, 
    public cd: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this._categorias = this.rep.categoria
    
    this.txtIdCategoria = this._categorias.idCategoria;
    this.txtNombre = this._categorias.nombre;
    this.txtDescripcion = this._categorias.descripcion;
    

  }
}
