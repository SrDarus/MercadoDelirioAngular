import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TipoProductoService {

  //url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
  url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
  //url:string = "http://localhost:65108/api/Conserjes/";

  constructor( private http: HttpClient) { }

  getTipoProductos():Observable<any>{
    let metodo:string = "getTipoProductos.php";
    return this.http.get<any>(this.url+metodo);
  }

  grabarTipoProducto(_nombre):Observable<any>{

  	//console.log(_nombre)


    let metodo:string = "insertTipoProducto.php?nombre="+_nombre;
    console.log(metodo)
    return this.http.post(this.url+metodo,{nombre: _nombre});
  }

  updateTipoProducto(_id, _nombre):Observable<any>{

    let metodo:string = "updateTipoProducto.php?id="+_id+"&nombre="+_nombre;
  	console.log(metodo)
    return this.http.post(this.url+metodo,{id: _id, nombre: _nombre});
  }

  deleteTipoProducto(_id):Observable<any>{

    let metodo:string = "deleteTipoProducto.php?id="+_id;
  	console.log(this.url+metodo)
    return this.http.post(this.url+metodo,{id: _id});
  }




  
}

/*
  	let httpHeaders = new HttpHeaders({
  		'Access-Control-Allow-Origin': 'http://localhost:4200/',
		'Access-Control-Allow-Methods' : 'POST',
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache',
	}); 

	let options = {
	     headers: httpHeaders
	};
	*/
