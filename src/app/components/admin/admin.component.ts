import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

//services
import { RepositoryService } from '../../services/repository.service';
import { CategoriaService } from '../../services/categoria.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  _categorias:any;
  _products:any = null;
  divCategoria:boolean=true;
  divProducto:boolean = false;
  divReporte:boolean = false;
  reporte:any={totalVentas:162500, productoMasVendido: "Lechuga"};
  fechaReporte = "02/05/2019";
  constructor( private rep: RepositoryService,
    private categoriaService: CategoriaService, 
    private prodService: ProductService,
    public cd: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(){
    this.divCategoria = true;
    this.divProducto = false;
    this.divReporte = false;
    this.categoriaService.getCategorias().subscribe((resp)=>{
      if(resp.Status_messaje = 'Categorias encontradas')
      {
      this._categorias = resp.Data;
      }
  });
  }

  getProductos(){
    this.divCategoria = false;
    this.divProducto = true;
    this.divReporte = false;
    this.prodService.getAllProducts().subscribe((resp)=>{
      if(resp.Status_messaje = 'Productos encontrados')
      {
          this._products = resp.Data;
      }
  });
  }

  getReporte(){
    this.divCategoria = false;
    this.divProducto = false;
    this.divReporte = true;
  }

  sendCategoria(categoria){
    this.rep.setCategoria(categoria)
    this.router.navigate(['/categorias'])
  }

  sendProducto(objeto){
    this.rep.setProduct(objeto)
    this.router.navigate(['/productos'])
  }
  
  nuevaCategoria(){
    let categoria = {idCategoria:0,nombre:'',descripcion:''};
    this.rep.setCategoria(categoria);
    this.router.navigate(['/categorias']);
  }


  limpiaRep(){
    this.rep.limpiaRep()
  }
  
}
