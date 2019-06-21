import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GenericoService {

  //url:string = "http://localhost:80/apis/MercadoDelirioApi/controller/";
  url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
  //url:string = "http://localhost:65108/api/Conserjes/";

  constructor( private http: HttpClient) { }

  login(_usuario:string, _clave:string){
    let metodo:string = "Login.php?email="+_usuario+"&clave="+_clave;
    console.log(this.url+metodo)
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
