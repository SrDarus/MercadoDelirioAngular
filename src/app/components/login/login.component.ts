import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { RepositoryService } from '../../services/repository.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private txtUsuario:string;
  private txtPassword:string;
  private _usuario:any;
  private _validate:boolean=false;

    constructor( 
      private prodService:ProductService,
      private route:Router,
      private rep: RepositoryService) { }
  
  
    ngOnInit() {
    }
  
    login(){
      this.prodService.login(this.txtUsuario, this.txtPassword).subscribe((resp)=>{
        console.log(resp)
        if(resp.Status_messaje==='Usuario encontrado'){
          this._usuario = resp.Data;
          sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
          console.log(resp.Data)
          if(resp.Data.perfil == 1){
            this.rep.setAdmin(1)
          }
          this.rep.setPerfil(resp.Data.perfil)
          this.route.navigate(['/main'])
        }else{
          alert("usuario o password incorrecto")
        }
      });
    }


}
