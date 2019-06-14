import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GenericoService } from '../../services/generico.service';
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
      private genericoService:GenericoService,
      private route:Router,
      private rep: RepositoryService) { }
  
  
    ngOnInit() {
    }
  
    login(){
      this.genericoService.login(this.txtUsuario, this.txtPassword).subscribe((resp)=>{
        console.log(resp)
        if(resp.Status_messaje===0){
          this._usuario = resp.Data;
          sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
          console.log(resp.Data)
          if(resp.Data.IdPerfil == 1){
            this.rep.setAdmin(1)
          }
          this.rep.setPerfil(resp.Data.IdPerfil)
          this.route.navigate(['/admin'])
        }else{
          alert("usuario o password incorrecto")
        }
      });
    }


}
