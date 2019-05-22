import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

//services
import { RepositoryService } from '../../services/repository.service';
import { TipoProductoService } from '../../services/tipoProducto.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  _tipoProductos:any;
  _products:any = null;
  divTipoProducto:boolean=true;
  divProducto:boolean = false;
  divReporte:boolean = false;
  reporte:any={totalVentas:162500, productoMasVendido: "Lechuga"};
  fechaReporte = "02/05/2019";
  constructor( private rep: RepositoryService,
    private tipoProdService: TipoProductoService, 
    private prodService: ProductService,
    public cd: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.getTipoProductos();
  }

  getTipoProductos(){
    this.divTipoProducto = true;
    this.divProducto = false;
    this.divReporte = false;
    this.tipoProdService.getTipoProductos().subscribe((resp)=>{
      if(resp.Status_messaje = 'tipoProductos encontradas')
      {
        this._tipoProductos = resp.Data;
        //console.log("this._tipoProductos",this._tipoProductos)
      }
    });
  }

  get tipoProductos(){
    return this._tipoProductos;
  }

  getProductos(){
    this.divTipoProducto = false;
    this.divProducto = true;
    this.divReporte = false;
    this.prodService.getAllProducts().subscribe((resp)=>{
      if(resp.Status_messaje = 'Productos encontrados')
      {
          this._products = resp.Data;
          console.log(this._products)
      }
  });
  }

  getReporte(){
    this.divTipoProducto = false;
    this.divProducto = false;
    this.divReporte = true;
  }

  guardarTipoProducto(tipoProducto){
    console.log(tipoProducto)
    this.rep.setTipoProducto(tipoProducto);
  }

  editarTipoProducto(tipoProducto){
    tipoProducto.action = 1
    console.log(tipoProducto)
    this.rep.setTipoProducto(tipoProducto)
    this.router.navigate(['/tipoProductos'])
  }

  sendProducto(objeto){
    this.rep.setProduct(objeto)
    this.router.navigate(['/productos'])
  }
  
  nuevoTipoProducto(){
    let tipoProducto = {IdTipoProducto:0,Nombre:''};
    this.rep.setTipoProducto(tipoProducto);
    this.router.navigate(['/tipoProductos']);
  }

  eliminarTipoProducto(){
      let id = this.rep.tipoProducto.IdTipoProducto;
      console.log(id)
      this.tipoProdService.deleteTipoProducto(id)
      .subscribe((resp)=>{
        console.log(resp)
      });
    }

  eliminarProducto(){
    console.log(this.rep.product.IdProducto)
    let id = this.rep.product.IdProducto;
    console.log(id)
    this.prodService.deleteProducto(id)
    .subscribe((resp)=>{
      console.log(resp)
    });
  }

  guardarProducto(producto){
    this.rep.setProduct(producto);
  }


  limpiaRep(){
    this.rep.limpiaRep()
  }
  
}
