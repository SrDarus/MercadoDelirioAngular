import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';

@Injectable()
export class ProductService {

    url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
    //url:string = "http://localhost:8080/apis/MercadoDelirioApi/controller/";
    //url:string = "http://localhost:65108/api/Conserjes/";

    constructor( private http:HttpClient) { }

    getAllProducts():Observable<any>{
      let metodo:string = "getAllProducts.php";
      return this.http.get<any>(this.url+metodo);
    }

    getProducts(idTipoProducto):Observable<any>{
      let metodo:string = "getProducts.php?idTipoProducto="+idTipoProducto;
      return this.http.get<any>(this.url+metodo);
    }

    getDetalleProduct(id):Observable<any>{
    	let metodo:string = "getDetalleExcursiones?Id="+id;
    	return this.http.get<any>(this.url+metodo);
    }

    




}
