import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';

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
      private route:Router) { }
  
  
    ngOnInit() {
    }
  
    login(){
      console.log("login")
      this.prodService.login(this.txtUsuario, this.txtPassword).subscribe((resp)=>{
        console.log(resp)
        if(resp.Status_messaje==='Usuario encontrado'){
          this._usuario = resp.Data;
          sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
          this.route.navigate(['/main'])
          
        }else{
          alert("usuario o password incorrecto")
        }
      });
    }


}
