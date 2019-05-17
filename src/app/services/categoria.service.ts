import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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

  grabarCategoria(_nombre, _descripcion):Observable<any>{

  	//console.log(_nombre+_descripcion)
  	let httpHeaders = new HttpHeaders({
  		//'Access-Control-Allow-Origin': 'http://localhost:4200/',
		//'Access-Control-Allow-Methods' : 'POST',
        //'Content-Type' : 'application/json',
        //'Cache-Control': 'no-cache',
	}); 

	let options = {
	     headers: httpHeaders
	}; 

    let metodo:string = "insertCategoria.php?nombre="+_nombre+"&descripcion="+_descripcion;
    return this.http.post(this.url+metodo,{nombre: _nombre, descripcion: _descripcion});
  }
}
