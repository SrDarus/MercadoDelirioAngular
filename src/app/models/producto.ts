export class Producto {

	IdProducto:number;
	IdTipoProducto:number;
	UnidadMedida:string;
	Nombre:string;
	Precio:number;
	Img:string;
	Estado:boolean;

	constructor (IdProducto,IdTipoProducto,UnidadMedida,Nombre,Precio,Img,Estado){

		this.IdProducto = IdProducto;
		this.IdTipoProducto = IdTipoProducto;
		this.UnidadMedida = UnidadMedida;
		this.Nombre = Nombre;
		this.Precio = Precio;
		this.Img = Img;
		this.Estado = Estado;
	}
}
