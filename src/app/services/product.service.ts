import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';

@Injectable()
export class ProductService {

    //url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
    url:string = "http://localhost/apis/MercadoDelirioApi/controller/";
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

    grabarProducto(_idTipoProducto,_unidadMedida,_nombre,_precio,_img):Observable<any>{
      
      let metodo:string = "insertProducto.php?idTipoProducto="+_idTipoProducto+"&idUnidadMedida="+_unidadMedida+"&nombre="+_nombre+"&precio="+_precio+"&img="+_img;
      return this.http.post(this.url+metodo,{id:_idTipoProducto,unidadMedida:_unidadMedida,nombre: _nombre,precio:_precio,img:_img});
    }
  
    updateProducto(_id, _idTipoProducto,_unidadMedida,_nombre,_precio,_img):Observable<any>{
  
      let metodo:string = "updateProducto.php?id="+_id+"&idTipoProducto="+_idTipoProducto+"&idUnidadMedida="+_unidadMedida+"&nombre="+_nombre+"&precio="+_precio+"&img="+_img;
      return this.http.post(this.url+metodo,{id: _id, idTipoProducto:_idTipoProducto, idUnidadMedida:_unidadMedida, nombre: _nombre, precio:_precio, img:_img});
    }
  
    deleteProducto(_id):Observable<any>{
  
      let metodo:string = "deleteProducto.php?id="+_id;
      console.log(this.url+metodo)
      return this.http.post(this.url+metodo,{id: _id});
    }

    




}
