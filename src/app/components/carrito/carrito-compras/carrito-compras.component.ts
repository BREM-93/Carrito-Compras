//Inyectamos servicios del carrito service
import { FormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { ProductosCarritoService } from '../../../core/servicio/productos-carrito.service';
import { CarroCompras } from '../../../core/modelo/carro-compras';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css'
})
export class CarritoComprasComponent implements OnInit{ //La aplicacion ira llenando el carrito cuando se carge, por eso implementaremos el metodo OnInit 
  public carritoService = inject(ProductosCarritoService);
  listCarrito: CarroCompras[] = [];

  ngOnInit(): void {
      this.getListCarrito();
  }

  //Captura o recupera el carrito que viene del servicio
  getListCarrito(){
    this.listCarrito = this.carritoService.getCarroCompras();
  }

  eliminarItem(index: number){
    this.carritoService.eliminar(index);
    this.getListCarrito();
  }

  actualizar(item: CarroCompras, index: number){
    this.carritoService.actualizar(index, item.cantidad);
  }

  onKeyDown(event: any){
    event.preventDefault();
  }

}

