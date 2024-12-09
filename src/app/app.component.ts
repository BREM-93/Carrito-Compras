import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./nav/cabecera/cabecera.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent],//Importamos el selector
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrito_compras';
}
