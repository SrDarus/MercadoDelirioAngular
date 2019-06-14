import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { TipoProductoService } from '../../services/tipoProducto.service';
import { ProductService } from '../../services/product.service';
import { GlobalService } from '../../services/global.service';

//LIBRERIAS
//import { NouisliderModule } from 'ng2-nouislider';

//animations
import { btnsCategoria } from '../../animations/btnsCategorias';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
      btnsCategoria
  ]
})
export class MainComponent implements OnInit {

    _tipoProductos:any=null;
    _listProducts:any = null; 
    _products:any[] = [];

    filteredProducts:any = null;
    filteredProductsByZona:any = null;

    //zonas:string[] = [];
    //zonaSelected:string;

    //min:number=0;
    //max:number=1000000;
	//rangeModel:any[]=[0,100];

    stateBtnsCat:string;

    constructor( private rep: RepositoryService,  
    	private tipoProdService: TipoProductoService,
    	private prodService: ProductService,
        public global: GlobalService, 
		public cd: ChangeDetectorRef,
        private router: Router) { }



    ngOnInit() { 
        //Hay que parametrizar
        //this.rep.admin
        this.stateBtnsCat = 'inactivo'
        this.rep.activeCartNotify = false;

	    this.tipoProdService.getTipoProductos().subscribe((resp)=>{
            if(resp.Status_messaje = 'tipoProductos encontradas')
            {
	    	    this._tipoProductos = resp.Data;
                //console.log(this._tipoProductos);
            }

	    	//console.log("this.filteredProducts", this.filteredProducts)
	
	    	//for(let i = 0;i<this._listProducts.length; i++){
		    //	this._listProducts.Img = 'assets/images/'+this._listProducts[i].Img
	    	//}

        });

        this.prodService.getAllProducts().subscribe((resp)=>{
            if(resp.Status_messaje = 'Productos encontrados')
            {
                this._listProducts = resp.Data;
                //console.log("this._listProducts", this._listProducts)
                for(let i = 0;i<this._listProducts.length; i++){
                    let urlImg = 'assets/images/products/'+this._listProducts[i].Img
                    this._listProducts[i].Img = urlImg
                    //console.log(this._listProducts[0].Img);
                }
            }

            //console.log("this.filteredProducts", this.filteredProducts)
    
            //for(let i = 0;i<this._listProducts.length; i++){
            //    this._listProducts.Img = 'assets/images/'+this._listProducts[i].Img
            //}

        });


    }

    get products(){
        return this._listProducts;
    }

    get tipoProductos(){
        return this._tipoProductos;
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

    getProducts(prod){
        //console.log(prod)
        this.prodService.getProducts(prod.IdTipoProducto).subscribe((resp)=>{
            
            this._listProducts = resp.Data;
            for(let i = 0;i<this._listProducts.length; i++){
                let urlImg = 'assets/images/products/'+this.products[i].Img
                this.products[i].Img = urlImg
            }

        });
    }

    sendProduct(product){
    	//console.log("sendProduct", product)
    	this.rep.setProduct(product)
    }



    /*
    filterByPrice(event){
		let newFilteredProducts:any = []
		for(let i=0; i<this.filteredProductsByZona.length; i++){
			if(this.filteredProductsByZona[i].montoAdulto >= this.rangeModel[0] && this.filteredProductsByZona[i].montoAdulto <= this.rangeModel[1] ){
				newFilteredProducts.push(this._listProducts[i]);
			}
		}
    	this.filteredProducts = newFilteredProducts;

    }*/

    onChange(event){
    	//console.log(event)
    }

    getSession(){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser.token; // your token
    }

    addItem(product){
        //let prodRepository :any= []
        let carro :any =[];
        //prodRepository = this.rep.product()
        carro = this.rep.carro;
         
        if(carro.length>0){
            let exist=false;
            for(let i =0; i<carro.length; i++){

                if(carro[i].IdProducto==product.IdProducto){
                  this.rep.changeItem(product)
                  exist = true;
                }
            }
            if(!exist){
                let newProduct  = {
                    IdProducto: product.IdProducto,
                    Nombre:product.Nombre,
                    Img: product.Img,
                    Precio: product.Precio,
                    Cantidad: 1
                }
                this.rep.addItem(newProduct, 0)
            }


        }else{
            let newProduct  = {
                IdProducto: product.IdProducto,
                Nombre:product.Nombre,
                Img: product.Img,
                Precio: product.Precio,
                Cantidad: 1
            } 
            this.rep.addItem(newProduct, 0)
        }
        /*
        for(let i = 0; i<this.listProduct.length; i++){
          let newProduct  = {
            idProducto: product.idProducto,
            nombre:product.nombre,
            Img: product.Img,
            precio: product.precio,
            cantidad: this.listProduct[i].cantidad,
          } 
          let exist = false;
          for(let j=0;j<carro.length;j++){
            //let idNewProduct = newProduct.idProdSubTipoProducto+newProduct.fecha+newProduct.jornada
            //let idItemCarro = carro[j].idProdSubTipoProducto+carro[j].fecha+carro[j].jornada
            if(carro[i].idProducto==product.idProducto){
              this.rep.changeItem(newProduct)
              exist = true;
            }
          }
          if(!exist){
            this.rep.addItem(newProduct, 0)
          }
        }*/
        //this.router.navigate(['/carro']);

    }



}
