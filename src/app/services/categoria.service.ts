import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
  //url:string = "http://localhost:8080/apis/MercadoDelirioApi/controller/";
  //url:string = "http://localhost:65108/api/Conserjes/";

  constructor( private http: HttpClient) { }

  getCategorias():Observable<any>{
    let metodo:string = "getCategorias.php";
    return this.http.get<any>(this.url+metodo);
  }

  insertCategoria(_nombre, _descripcion):Observable<any>{
    let metodo:string = "insertCategoria.php";
    return this.http.post(this.url+metodo,{Nombre: _nombre, Descripcion: _descripcion});
  }
}
