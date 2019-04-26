import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RepositoryService } from '../../services/repository.service';
import { ProductService } from '../../services/product.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

	carrList:any;
	total:number=0;

  /*FORMULARIO*/
  //idiomas
  idiomas:any[];

  //hoteles
  hoteles:any[];

  //textos
  pago:any={
    nombre:"",
    email:"",
    direccion:"",
    observacion:""
  }

  email:boolean;

  constructor(  
    private rep: RepositoryService,
    private prodSer: ProductService,
    private router: Router,
    public global: GlobalService ) { }
  
  ngOnInit() {      
    if(this.global.countProduct <1){
      this.router.navigate(['/main']);
    }
  	this.carrList = this.rep.carro;
    this.rep.activeCartNotify = false;

    this.idiomas = [
      {id:1, nombre:'Español'},
      {id:2, nombre:'Ingles'},
      {id:3, nombre:'Portugues'}
    ];
    //this.total = this.rep.total;

    this.calcularTotal();

    //console.log(this.rep.getItems())
  
  }

  onChangeCantidadItem(item,operacion){
    this.rep.changeCantidad(item,operacion);
    this.carrList = this.rep.carro;
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.rep.calcularTotal()
      //this.total = 0
      //for(let i=0; i<this.carrList.length; i++){
      //    this.total += ((this.carrList[i].cantidadAdulto * this.carrList[i].precioAdulto)+(this.carrList[i].cantidadChild * this.carrList[i].precioChild)) 
      //    //console.log("total", this.total);
      //}
  }

  sendCarro(){

    let reserva:any= {
      passenger:[],
      products:[]
    };

    //reserva.passenger = this.passenger;
    //console.log("reserva", reserva)
    //this.prodSer.enviarReserva(reserva).subscribe((resp)=>{
    //  let respuesta = resp;
    //  if(resp){
      

    //    
    //  }
    //});
        
  }

  //changeCantidad(product, action){
  //  //this.rep.cambiarCantidadItem(product, action)
  //}

}
