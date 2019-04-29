import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { ProductService } from '../../services/product.service';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  _categorias:any;
  _products:any = null;
  divCategoria:boolean=true;
  divProducto:boolean = false;
  constructor( private rep: RepositoryService, 
    private prodService: ProductService,
    public global: GlobalService, 
    public cd: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(){
    this.divCategoria = true;
    this.divProducto = false;
    this.prodService.getCategorias().subscribe((resp)=>{
      if(resp.Status_messaje = 'Categorias encontradas')
      {
      this._categorias = resp.Data;
      }
  });
  }

  getProductos(){
    this.divCategoria = false;
    this.divProducto = true;
    this.prodService.getAllProducts().subscribe((resp)=>{
      if(resp.Status_messaje = 'Productos encontrados')
      {
          this._products = resp.Data;
      }
  });
  }

  sendDiv(div:number){
    console.log(div)
    this.rep.setDiv(div)
  }
}
