import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    //url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
    url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
    //url:string = "http://localhost:65108/api/Conserjes/";
    constructor( private http:HttpClient) { }

    grabarUsuario(_nombre,_email,_clave,_idperfil):Observable<any>{
      
      let metodo:string = "insertUser.php?nombre="+_nombre+"&email="+_email+"&clave="+_clave+"&idperfil="+_idperfil;
      return this.http.post(this.url+metodo,{nombre:_nombre,email:_email,clave: _clave,idperfil:_idperfil});
    }
}
