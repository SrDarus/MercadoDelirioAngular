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
  txtAviso:String;
  actionAviso:boolean;


  private _producto:any;//TipoProducto = new TipoProducto(0,'');
  test:string = "atest"
  constructor( private rep: RepositoryService,
               private servProducto: ProductService,
    private router: Router) { }

  ngOnInit() {
    this._producto = this.rep.product;
    this.actionAviso = false;
    console.log(this._producto)
  }

  get producto(){
    return this._producto
  }

  grabarProducto(){
    if(this.producto.IdProducto==0){
      this.servProducto.grabarProducto(this.producto.IdTipoProducto,this.producto.IdUnidadMedida,this.producto.Nombre,this.producto.Precio,this.producto.Img)
      .subscribe((resp)=>{

        if(resp.Data>0){
          this.router.navigate(['/admin'])
          
        }else{
          this.actionAviso = true;
          this.txtAviso = resp.Status_messaje;
        }

        console.log(resp)
      });
    }else{
      this.servProducto.updateProducto(this.producto.IdProducto, this.producto.IdTipoProducto,this.producto.IdUnidadMedida, this.producto.Nombre, this.producto.Precio, this.producto.Img)
      .subscribe((resp)=>{
        console.log(resp)
        if(resp.Status_messaje==0 ){
          this.router.navigate(['admin']);
        }else{
          this.actionAviso = true;
          this.txtAviso = "Problemas con el servidor";
          this.txtAviso = resp.Status_messaje;
        }
      });
    }


    
  }
}
