export class Producto {

	idMaeEmpresaGrupo:number;
	idProdSubTipoProducto:number;
	nombre:string;
	zona: string;
	montoAdulto: number;
	montoChild: number
	img1: string;
	img2: string;
	
	descripcion: string;
	fecha: string;

	constructor (idMaeEmpresaGrupo, idProdSubTipoProducto, nombre, zona, montoAdulto, montoChild, img1, img2){

		this.idMaeEmpresaGrupo = idMaeEmpresaGrupo;
		this.idProdSubTipoProducto = idProdSubTipoProducto;
		this.nombre = nombre;
		this.zona = zona;
		this.montoAdulto = montoAdulto;
		this.montoChild = montoChild
		this.img1 = img1;
		this.img2 = img2;
	}	
}
