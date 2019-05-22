import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//model
//import { TipoProducto } from '../../models/tipo-producto'

//services
import { RepositoryService } from '../../services/repository.service';
import { TipoProductoService } from '../../services/tipoProducto.service';



@Component({
  selector: 'app-tipoProducto',
  templateUrl: './tipoProducto.component.html',
  styleUrls: ['./tipoProducto.component.css']
})
export class TipoProductoComponent implements OnInit {

  /*private tipoProducto = [
  { idtipoProducto:0  },
  { nombre:""},
  { descripcion:""},
  ];*/

  txtAviso:String;
  actionAviso:boolean;


  private _tipoProducto:any;//TipoProducto = new TipoProducto(0,'');
  test:string = "atest"
  constructor( private rep: RepositoryService,
               private servtipoProducto: TipoProductoService,
    private router: Router) { }

  ngOnInit() {
    this._tipoProducto = this.rep.tipoProducto;
    this.actionAviso = false;
    console.log(this._tipoProducto)
  }

  get tipoProducto(){
    return this._tipoProducto
  }

  grabarTipoProducto(){
    if(this.tipoProducto.IdTipoProducto==0){
      this.servtipoProducto.grabarTipoProducto(this.tipoProducto.Nombre)
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
      this.servtipoProducto.updateTipoProducto(this.tipoProducto.IdTipoProducto, this.tipoProducto.Nombre)
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
