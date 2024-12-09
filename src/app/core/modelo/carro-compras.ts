import { Producto } from "./producto";

export class CarroCompras {
    producto!: Producto;
    cantidad!: number;
    constructor(producto: Producto, cantidad: number = 1){
        this.producto = producto;
        this.cantidad = cantidad;
    }

    //Posteriormente se creara el servicio que almacenara la logica del carrito de compras.
}
