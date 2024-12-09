//Archivo para invocar o consumir nuestro servicio almacenado en la ruta servicio/producto.service.ts

import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../core/servicio/producto.service';
import { Producto } from '../../../core/modelo/producto';
import { ProductosCarritoService } from '../../../core/servicio/productos-carrito.service';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-catalogo-inicio',
  imports: [CommonModule],
  templateUrl: './catalogo-inicio.component.html',
  styleUrl: './catalogo-inicio.component.css'
})
export class CatalogoInicioComponent implements OnInit{
  private productoService = inject(ProductoService);//Inyectamos la clase de ProductoService
  private carritoService = inject(ProductosCarritoService);
  productos: Producto[] = [];
  filteredProductos: Producto[] = []; // Lista filtrada que se mostrará

  //Cuando el componente se inicia, invocara este  metodo que consume el servicio del archivo Json,
  ngOnInit(): void {
      
      /*1.*/ this.getProductos();
  }

  //Invocamos el servicio getProductos
  getProductos(){ //1.Este metodo tendra que ser invocado cuando se incia con cualquier componente.
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.filteredProductos = data; // Inicializamos con todos los productos
        console.log(this.productos);
      }, error: (e) =>{
        console.error(e);
      }
    })
  }

   // Método para filtrar los productos
   filterProductos(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProductos = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTerm)
    );
  }

  agregarProducto(item: Producto){
    //Inyectar el servicio de carrito service
    this.carritoService.agregar(item);
  }
  
}
