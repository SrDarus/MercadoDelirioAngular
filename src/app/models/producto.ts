export class Producto {

	IdMaeEmpresaGrupo:number;
	IdProdSubTipoProducto:number;
	Nombre:string;
	Zona: string;
	MontoAdulto: number;
	MontoChild: number
	Img1: string;
	Img2: string;
	
	Descripcion: string;
	Fecha: string;

	constructor (idMaeEmpresaGrupo, idProdSubTipoProducto, nombre, zona, montoAdulto, montoChild, img1, img2){

		this.IdMaeEmpresaGrupo = idMaeEmpresaGrupo;
		this.IdProdSubTipoProducto = idProdSubTipoProducto;
		this.Nombre = nombre;
		this.Zona = zona;
		this.MontoAdulto = montoAdulto;
		this.MontoChild = montoChild
		this.Img1 = img1;
		this.Img2 = img2;
	}	
}
