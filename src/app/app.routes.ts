//Archivo donde configuramos las rutas de nuestra pagina
import { Routes } from '@angular/router';
import { CatalogoInicioComponent } from './components/catalogo/catalogo-inicio/catalogo-inicio.component';
import { CarritoComprasComponent } from './components/carrito/carrito-compras/carrito-compras.component';

export const routes: Routes = [
    { path: '', component: CatalogoInicioComponent},
    { path: 'carrito', component: CarritoComprasComponent }, //Ruta hacia el carrito de compras
    { path: '**', pathMatch: 'full', redirectTo: ''} //Redirecciona a la ruta inicial, que es el catalogo inicio
];
