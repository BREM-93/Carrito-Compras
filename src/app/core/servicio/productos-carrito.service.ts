//Creamos la clase por medio del comando: ng g s core/servicio/productos-carrito --skip-tests
import { Injectable } from '@angular/core';
import { CarroCompras } from '../modelo/carro-compras';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosCarritoService {

  private listCarrito: CarroCompras[] = [];
  
  //Creacion de metodo para obtener la lista del carrito
  getCarroCompras(){
    this.obtenerData();
    return this.listCarrito;
  }

  agregar(producto: Producto, cantidad: number = 1){
    this.obtenerData();
    const index = this.listCarrito.findIndex(item => item.producto.id == producto.id);
    if(index== -1){
      const item = new CarroCompras(producto, cantidad);
      this.listCarrito.push(item);
    }
    else{
      this.actualizar(index, this.listCarrito[index].cantidad + cantidad);
    }
    this.almacenarData();
  }
  actualizar(index: number, cantidad: number){
    if(index>=0 && index < this.listCarrito.length){
      this.listCarrito[index].cantidad = cantidad
    }
    this.almacenarData();
  }

  cantidad(){
    this.obtenerData();
    return this.listCarrito.length;
  }

  almacenarData(){
    localStorage.setItem('carrito', JSON.stringify(this.listCarrito));
  }

  obtenerData(){
    this.listCarrito = [];
    if(typeof window != 'undefined' && window.localStorage){
      const carrito = localStorage.getItem('carrito');
      if(carrito!=null){
        this.listCarrito = JSON.parse(carrito);
      }
    }
  }

  eliminar(index:number){
    if(index>=0 && index < this.listCarrito.length){
      this.listCarrito.splice(index, 1);
      this.almacenarData();
    }
  }

  total(){
    const total = this.listCarrito.reduce((sum, item) =>
      sum + item.producto.precio * item.cantidad, 0
    );
    return total;
  }

  constructor() { }
}
