import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { ProductService } from '../../services/product.service';
import { GlobalService } from '../../services/global.service';

//LIBRERIAS
//import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    _categorias:any=null;
    _products:any = null; 
    //listProduct:any[] = [];

    filteredProducts:any = null;
    filteredProductsByZona:any = null;

    zonas:string[] = [];
    zonaSelected:string;

    min:number=0;
    max:number=1000000;
	rangeModel:any[]=[0,100];

    constructor( private rep: RepositoryService, 
    	private prodService: ProductService,
            public global: GlobalService, 
		public cd: ChangeDetectorRef,
        private router: Router) { }



    ngOnInit() { 
        //this.router.navigate(['/main']);
        let user=1
        this.rep.setAdmin(user);
        this.rep.activeCartNotify = false;

	    this.prodService.getCategorias().subscribe((resp)=>{
            if(resp.Status_messaje = 'Categorias encontradas')
            {
	    	    this._categorias = resp.Data;
                //console.log(this._categorias);
            }

	    	//console.log("this.filteredProducts", this.filteredProducts)
	
	    	//for(let i = 0;i<this._products.length; i++){
		    //	this._products.img = 'assets/images/'+this._products[i].img
	    	//}

        });

        this.prodService.getAllProducts().subscribe((resp)=>{
            if(resp.Status_messaje = 'Productos encontrados')
            {
                this._products = resp.Data;
                for(let i = 0;i<this._products.length; i++){
                    let urlImg = 'assets/images/products/'+this.products[i].img
                    this.products[i].img = urlImg
                }
                //console.log(this._categorias);
            }

            //console.log("this.filteredProducts", this.filteredProducts)
    
            //for(let i = 0;i<this._products.length; i++){
            //    this._products.img = 'assets/images/'+this._products[i].img
            //}

        });


    }

    get products(){
        return this._products;
    }

    get getCategorias(){
        return this._categorias;
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
        this.prodService.getProducts(prod.idCategoria).subscribe((resp)=>{
            
            this._products = resp.Data;
            for(let i = 0;i<this._products.length; i++){
                let urlImg = 'assets/images/products/'+this.products[i].img
                this.products[i].img = urlImg
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
				newFilteredProducts.push(this._products[i]);
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
                if(carro[i].idProducto==product.idProducto){
                  this.rep.changeItem(product)
                  exist = true;
                }
            }
            if(!exist){
                let newProduct  = {
                    idProducto: product.idProducto,
                    nombre:product.nombre,
                    img: product.img,
                    precio: product.precio,
                    cantidad: 1
                }
                this.rep.addItem(newProduct, 0)
            }


        }else{
            let newProduct  = {
                idProducto: product.idProducto,
                nombre:product.nombre,
                img: product.img,
                precio: product.precio,
                cantidad: 1
            } 
            this.rep.addItem(newProduct, 0)
        }
        /*
        for(let i = 0; i<this.listProduct.length; i++){
          let newProduct  = {
            idProducto: product.idProducto,
            nombre:product.nombre,
            img: product.img,
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
