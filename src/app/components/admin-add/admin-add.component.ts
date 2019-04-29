import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { ProductService } from '../../services/product.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  private divCategoriaForm:boolean = false;
  private divProductoForm:boolean = false;

  private txtIdCategoria:number;
  private txtNombre:string;
  private txtDescripcion:string;

  constructor( private rep: RepositoryService, 
    private prodService: ProductService,
    public global: GlobalService, 
    public cd: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    let resp = this.rep.getDiv()
    console.log(resp)
    if (resp == 1){
      this.divProductoForm = false;
      this.divCategoriaForm = true;
    }else{
      this.divCategoriaForm = false;
      this.divProductoForm = true;
    }
  }

}
