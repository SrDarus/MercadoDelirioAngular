import { Component, OnInit, Input } from '@angular/core';
/*
import { Router } from '@angular/router';
import {DatePipe} from '@angular/common';
//SERVICES
import { RepositoryService } from '../../services/repository.service';
import { ProductService } from '../../services/product.service';

import { Producto} from '../../models/Producto';
*/

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent{

/*
  detailProduct: any[] = [];

  listProductDetail:any[] = [];

  prodRepository:Producto = new Producto(0,0,"","",0,0,"","");

  fecha:any = new Date();

   

  constructor( 
  	private rep: RepositoryService,
    private prodService: ProductService,
   	private router: Router,
    private dPipe: DatePipe) { }

  ngOnInit() {
    this.prodRepository = this.rep.product

    if(this.prodRepository.idProdSubTipoProducto == 0){
      this.router.navigate(['/main']);
    }else{
      let _fecha = this.dPipe.transform(this.fecha, 'd/M/yy, h:mm a');
      let tem:any = _fecha.split(',')
      let fechaActual:string = tem[0];
      let hora_horario = tem[1].split(' ')
      let horaActual:string=hora_horario[1];
      let jornadaActual:string=hora_horario[2];

      //console.log("prodRepository",prodRepository)
      this.prodService.getDetalleProduct(this.prodRepository.idProdSubTipoProducto).subscribe((resp)=>{

        this.detailProduct = resp;
        //console.log("detail product:", this.detailProduct)

        for(let i = 0;i<this.detailProduct.length; i++){
          
          
          //formateamos la fecha
          this.detailProduct[i].fecha = this.detailProduct[i].fecha.substr(0,10)
          
          if(this.detailProduct[i].jornada=="PM"){
            if(fechaActual.substr(0,2)==this.detailProduct[i].fecha.substr(0,2)){
              //console.log(horaActual.substr(0,2) + "indes: " + i)
              //console.log(this.detailProduct[i].fecha.substr(0,2) + "indes: "+ i)
              if(jornadaActual=="AM"){
                let newValue = {disponible:true}
                this.detailProduct[i] = Object.assign(this.detailProduct[i], newValue);
              }else{
                let newValue = {disponible:false}
                this.detailProduct[i] = Object.assign(this.detailProduct[i], newValue);
              }
            }else{
              let newValue = {disponible:true}
              this.detailProduct[i] = Object.assign(this.detailProduct[i], newValue);
            }
          }else{
            let diferencia =  parseInt(fechaActual.substr(0,2))-parseInt(this.detailProduct[i].fecha.substr(0,2))
            if(diferencia <= -1){
              let newValue = {disponible:true}
              this.detailProduct[i] = Object.assign(this.detailProduct[i], newValue);
            }else{
              let newValue = {disponible:false}
              this.detailProduct[i] = Object.assign(this.detailProduct[i], newValue);
            }
          }
          //agregamos los valores cantidad seleccionana
          let newValue = {cantidadAdultoSelected:0}
          let newValue2 = {cantidadNinoSelected:0}
          this.detailProduct[i] = Object.assign(this.detailProduct[i], newValue);
          this.detailProduct[i] = Object.assign(this.detailProduct[i], newValue2);
          //console.log("this.detailProduct", this.detailProduct)
        }


      });
    }

  }

  addItem(){
    let prodRepository :any= []
    let carro :any =[];
  	prodRepository = this.rep.product
    carro = this.rep.product;
    //console.log("rep",prodRepository)
    //console.log("this.listProductDetail",this.listProductDetail)

    for(let i = 0; i<this.listProductDetail.length; i++){
      let newProduct  = {
        idProdSubTipoProducto: prodRepository.idProdSubTipoProducto,
        nombre:prodRepository.nombre,
        img2: prodRepository.img2,
        fecha: this.listProductDetail[i].fecha,
        jornada: this.listProductDetail[i].jornada,
        precioAdulto: prodRepository.montoAdulto,
        precioChild: prodRepository.montoChild,
        cantidadAdulto: this.listProductDetail[i].cantidadAdultoSelected,
        cantidadChild: this.listProductDetail[i].cantidadNinoSelected
      } 
      let exist = false;
      for(let j=0;j<carro.length;j++){
        let idNewProduct = newProduct.idProdSubTipoProducto+newProduct.fecha+newProduct.jornada
        let idItemCarro = carro[j].idProdSubTipoProducto+carro[j].fecha+carro[j].jornada
        if(idNewProduct==idItemCarro){
          this.rep.changeItem(newProduct)
          exist = true;
        }
      }
      if(!exist){
        this.rep.addItem(newProduct, 0)
      }
    }
    this.router.navigate(['/carro']);

  }

  existObject(obj, list) {
	  for (let i = 0; i < list.length; i++) {
	      if (list[i] === obj) {
	          return true;
	      }
	  }
	  return false;
	}

  prepareAddItem(product){
    //console.log("product", product)
    let addItem:any[];
    for(let i=0;i<product.lengt; i++){
      if(product){

      }
    }
  }

	//changeCantidad(product, action){
  //  this.rep.cambiarCantidadItem(product, action)
  //}

  selectedCantidad(item){
    let index = this.listProductDetail.indexOf(item);
 
    if(index == -1){
      this.listProductDetail.push(item);
    }else{
      if(this.listProductDetail[index].cantidadAdultoSelected>0){
        this.listProductDetail[index] = item;
      }else{      
        this.listProductDetail.splice(index,1)

      }
    }
  }
  */

}
