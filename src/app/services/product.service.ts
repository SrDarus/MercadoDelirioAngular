import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';

@Injectable()
export class ProductService {

    //url:string = "http://localhost/apis/MercadoDelirio/controller/";
    url:string = "http://localhost:8080/apis/MercadoDelirioApi/controller/";
    //url:string = "http://localhost:65108/api/Conserjes/";

    constructor( private http:HttpClient) { }

    login(_usuario:string, _password:string){
        let metodo:string = "Login.php?email="+_usuario+"&password="+_password;
        return this.http.get<any>(this.url+metodo);
    }

    getCategorias():Observable<any>{
    	let metodo:string = "getCategorias.php";
    	return this.http.get<any>(this.url+metodo);
    }

    getAllProducts():Observable<any>{
      let metodo:string = "getAllProducts.php";
      return this.http.get<any>(this.url+metodo);
    }

    getProducts(idCategoria):Observable<any>{
      let metodo:string = "getProducts.php?idCategoria="+idCategoria;
      return this.http.get<any>(this.url+metodo);
    }

    getDetalleProduct(id):Observable<any>{
    	let metodo:string = "getDetalleExcursiones?Id="+id;
    	return this.http.get<any>(this.url+metodo);
    }

    enviarReserva(_reserva){
      let _Id = '1';
      //let urlApi = this.url+"Ticket/abordarPasajero?nombrePasajero="+_nombrePasajero+"&email="+_email+"&habitacion="+_habitacion+"&observacion="+_observacion;
      let urlApi = this.url+"enviarReserva?reserva="+_reserva;
      //return this.http.post(urlApi,{nombrePasajero: _nombrePasajero,email:_email,habitacion: _habitacion,observacion:_observacion});
      return this.http.post(urlApi,{Id: _Id});
    }




}
