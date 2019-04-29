import { Component, OnInit, ViewChild, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


import { RepositoryService } from '../../services/repository.service';
import { GlobalService } from '../../services/global.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	carrList:any;
    contador:number;
    total:number;

    btnAdmin:boolean;

	@ViewChild('resumenCarro') resumenCarro: ElementRef;
    @ViewChild('myModal') myModal: ElementRef;
    
    constructor(  
            private rep: RepositoryService,
            private router: Router,
            public global: GlobalService, 
            private cdr: ChangeDetectorRef
     ) {   }

    ngOnInit() {
    	this.rep.activeCartNotify = false;
    }

    openCarNotify(){
    	if(this.rep.activeCartNotify){
    		this.rep.activeCartNotify = !this.rep.activeCartNotify;
    	}else{
    		//this.rep.getItems();
    		this.rep.activeCartNotify = !this.rep.activeCartNotify;
    	}
        //this.router.navigate(['/carro']);
    }

    deleteItem(item){
        let producto = item;
        this.rep.removeItem(producto);

    }

    //changeCantidad(item, action, tipo){
//
    //    //let rep = this.rep.getItems();
    //    for(let i = 0;i<rep.length;i++){
    //        if(rep[i].idConserje==item.idConserje && rep[i].fecha==item.fecha){
    //            if(action=='r'){
    //                if(tipo=='a'){
    //                    item.cantidadAdultoSelected = parseInt(item.cantidadAdultoSelected,10) - 1
    //                }else{
    //                    item.cantidadNinoSelected = parseInt(item.cantidadNinoSelected,10) -1
    //                }
    //            }else{
    //                if(tipo=='a'){
    //                    item.cantidadAdultoSelected = parseInt(item.cantidadAdultoSelected,10) +1
    //                }else{
    //                    item.cantidadNinoSelected = parseInt(item.cantidadNinoSelected,10) +1
    //                }
//
    //            }
    //            if(item.cantidadAdultoSelected<1){
    //                item.cantidadAdultoSelected = 0;
    //            }
    //            if(item.cantidadNinoSelected<1){
    //                item.cantidadNinoSelected = 0;
    //            }
    //        }
    //    }
    //    //this.rep.cambiarCantidadItem(product, action)
    //}

    //get calcularTotal(){
    //    this.total = this.rep.calcularTotal()
    //    //if(this.carrList.length>0)
    //    //{
    //    //    for(let i=0; i<this.carrList.length; i++){
    //    //    this.total += ((this.carrList[i].cantidadAdulto * this.carrList[i].precioAdulto)+(this.carrList[i].cantidadChild * this.carrList[i].precioChild)) 
    //    //    //console.log("total", this.total);
    //    //    }    
    //    //}
    //    this.cdr.detectChanges();
    //    return this.total
    //}

}
