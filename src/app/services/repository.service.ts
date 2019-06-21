import { Injectable } from '@angular/core';
import { Producto} from '../models/Producto';
import { TipoProducto} from '../models/Tipo-producto';
import { GlobalService } from './global.service';

@Injectable()
export class RepositoryService {

    constructor(public global:GlobalService){}
    private _carro:any[] = [];
    private _tipoProducto:any;
    private _product:any;
    private _total:number = 0;
    private _admin:number = 0;
    private _perfil:number = 0;
    private _user:any;
    activeCartNotify:boolean = false;
    //contador:number = 0;
    get product(){
        return this._product;
    }

    get carro(){
        return this._carro;
    }

    get total(){
        return this._total;
    }

    get user(){
        return this._user;
    }
    setUser(user){
        this._user = user;
    }

    setProduct(product){
        this._product = product;
    }

    setTipoProducto(tipoProducto){
        console.log("set", tipoProducto)
      this._tipoProducto = tipoProducto
    }
    
    get tipoProducto(){
        //console.log(this.tipoProducto)
        return this._tipoProducto;
    }

    setAdmin(value){
        this._admin = value;
    }

    get admin(){
        return this._admin;
    }

    setPerfil(value){
        this._perfil = value;
    }

    get perfil(){
        return this._perfil;
    }

    get catetoria(){
        return this._tipoProducto;
    }

    addItem(product, action){
        if(action === 0){
            this._carro.push(product)
        }else{
            let i = this._carro.indexOf(product);
            this._carro[i].Cantidad +=1
        }
        this.global.countProduct = this._carro.length
        //this.calcular_Total()
        this.activeCartNotify = true
        this.calcularTotal()

    }

    changeItem(item){
        for(let i=0;i<this._carro.length;i++){
            //let idNewItem = item.idProdSubTipoProducto+item.fecha+item.jornada
            //let idItemCarro = this._carro[i].idProdSubTipoProducto+this.carro[i].fecha+this.carro[i].jornada
            if(item.IdProducto==this._carro[i].IdProducto){
                this._carro[i].Cantidad +=1;
            }
        }
        this.calcularTotal()
    }

    removeItem(product){

        let i = this._carro.indexOf(product);
        if(i != -1){
            this._carro.splice(i,1)
        }
        this.global.countProduct = this._carro.length
        this.calcularTotal()
    }

    cambiarCantidadItem(product, action){
        let i = this._carro.indexOf(product);
        switch(action) {
            case 's':
                this._carro[i].Cantidad +=1
                break;
            case 'r':
                this._carro[i].Cantidad -=1
                if(this._carro[i].Cantidad <0){this._carro[i].Cantidad=0}
                break;
            default:
                return false
        }
        this.calcularTotal()
    }



    changeCantidad(item, action){
        //console.log("item",item)
        //console.log("action",action)
        //let rep = this.rep.getCarro();
        for(let i = 0;i<this._carro.length;i++){

            if(this._carro[i].IdProducto==item.IdProducto){
                if(action=='r'){
                    this._carro[i].Cantidad = parseInt(this._carro[i].Cantidad,10) - 1
                }else{
                    this._carro[i].Cantidad = parseInt(this._carro[i].Cantidad,10) +1
                }
                if(this._carro[i].Cantidad<1){
                    this._carro[i].Cantidad = 0;
                }
                if(this._carro[i].Cantidad<1){
                    this._carro[i].Cantidad = 0;
                }
            }
        }
        //console.log(this._carro)
        this.calcularTotal()
        //this.rep.cambiarCantidadItem(product, action)
    }

    calcularTotal():number{
        this._total = 0
        if(this._carro.length>0){
            for(let i=0; i<this._carro.length; i++){
                this._total += this._carro[i].Cantidad  * this._carro[i].Precio
                //console.log("_total", this._total);
            }
        }
        return this._total
    }

    limpiaRep(){
        this._tipoProducto  = new TipoProducto(0,"");
        this._product = new Producto(0,0,"","",0,0,"",);
    }
    cerrarSesion(){
        this._admin = 0;
        this._perfil = 0;
        this._tipoProducto  = new TipoProducto(0,"");
        this._product = new Producto(0,0,"","",0,0,"");
    }


}

