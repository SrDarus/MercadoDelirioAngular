import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { ProductService } from '../../services/product.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  private txtIdProducto:number;
  private txtNombre:string;
  private txtPrecio:number;
  private txtUnidad:number;
  private txtTipoUnidad:string;
  private txtImg:string;
  private txtIdCategoria:number;

  private _productos:any;

  constructor( private rep: RepositoryService, 
    private prodService: ProductService,
    public global: GlobalService, 
    public cd: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this._productos = this.rep.product
    this.txtIdProducto = this._productos.idProducto;
    this.txtNombre = this._productos.nombre;
    this.txtPrecio = this._productos.precio;
    this.txtUnidad = this._productos.unidad;
    this.txtTipoUnidad = this._productos.tipoUnidad;
    this.txtImg = this._productos.img;
    this.txtIdCategoria = this._productos.idCategoria;

  }
}
