import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { UserService } from '../../services/user.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrousuarioComponent implements OnInit {

  private _user:any;
  constructor( private rep: RepositoryService,
    private servUser: UserService,
private router: Router) { }


  ngOnInit() {
    //this._user = this.rep.user;
    this._user = {
      IdUsuario : 0,
      Nombre:'',
      Email:'',
      Clave:'',
      IdPerfil:0
    }
  }
  get usuario(){
    return this._user
  }

  grabarUser(){
    console.log(this.usuario)
    if(this.usuario.IdUsuario==0){
      this.servUser.grabarUsuario(this.usuario.Nombre,this.usuario.Email,this.usuario.Clave,this.usuario.IdPerfil)
      .subscribe((resp)=>{

        if(resp.Status===200){
          this.router.navigate(['/login'])
        }else{
          alert("datos incorrectos")
        }
      });
    }
    //else{
    //  this.servProducto.updateProducto(this.producto.IdProducto, this.producto.IdTipoProducto,this.producto.IdUnidadMedida, this.producto.Nombre, this.producto.Precio, this.producto.Img)
    //  .subscribe((resp)=>{
    //    console.log(resp)
    //    if(resp.Status_messaje==0 ){
    //      this.router.navigate(['admin']);
    //    }else{
    //      this.actionAviso = true;
    //      this.txtAviso = "Problemas con el servidor";
    //      this.txtAviso = resp.Status_messaje;
    //    }
    //  });
    //}


    
  }

}
