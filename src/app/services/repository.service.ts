import { Injectable } from '@angular/core';
import { Producto} from '../models/Producto';
import { GlobalService } from './global.service';

@Injectable()
export class RepositoryService {

    constructor(public global:GlobalService){}
    private _carro:any[] = [];
    private _product:Producto = new Producto(0,0,"","",0,0,"",""); 
    private _total:number = 0;
    private _div:number = 0;
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

    setProduct(product){
        this._product = product;

        console.log(this.product)
    }


    addItem(product, action){
        if(action === 0){
            this._carro.push(product);

        }else{
            let i = this._carro.indexOf(product);
            this._carro[i].cantidad +=1
        }
        this.global.countProduct = this._carro.length
        //this.calcular_Total()
        this.activeCartNotify = true;
        this.calcularTotal()

    }

    changeItem(item){
        for(let i=0;i<this._carro.length;i++){
            //let idNewItem = item.idProdSubTipoProducto+item.fecha+item.jornada
            //let idItemCarro = this._carro[i].idProdSubTipoProducto+this.carro[i].fecha+this.carro[i].jornada
            if(item.idProducto==this._carro[i].idProducto){
                this._carro[i].cantidad +=1;
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
                this._carro[i].cantidad +=1
                break;
            case 'r':
                this._carro[i].cantidad -=1
                if(this._carro[i].cantidad <0){this._carro[i].cantidad=0}
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

            if(this._carro[i].idProducto==item.idProducto){
                if(action=='r'){
                    this._carro[i].cantidad = parseInt(this._carro[i].cantidad,10) - 1
                }else{
                    this._carro[i].cantidad = parseInt(this._carro[i].cantidad,10) +1
                }
                if(this._carro[i].cantidad<1){
                    this._carro[i].cantidad = 0;
                }
                if(this._carro[i].cantidad<1){
                    this._carro[i].cantidad = 0;
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
                this._total += this._carro[i].cantidad  * this._carro[i].precio
                //console.log("_total", this._total);
            }
        }
        return this._total
    }

    setDiv(div:number){
      this._div = div;

    }
    getDiv(){
        return this._div;
    }

}

