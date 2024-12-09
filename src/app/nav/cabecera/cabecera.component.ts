import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosCarritoService } from '../../core/servicio/productos-carrito.service';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule , RouterLink], //Importamos el 'routerLink="/"' del archivo html.
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  public carritoService = inject(ProductosCarritoService)
}
