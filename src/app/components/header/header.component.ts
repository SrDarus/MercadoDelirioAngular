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

    cerrarSesion(){
        this.rep.cerrarSesion();
        this.router.navigate(['/main'])
    }

    cerrarModalCarro(){
        document.getElementById('btnCerrarModalCarro').click();
        this.router.navigate(['/carro']);
    }
    
}
