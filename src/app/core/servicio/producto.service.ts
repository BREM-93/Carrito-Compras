//En este archivo haremos las peticiones e invocaciones con http
//El cual consumira todo nuestro archivo json

import { HttpClient } from '@angular/common/http'; //Importacion despues del inject
import { inject, Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);
  private url: string = 'json/productos.json'; //Ruta base, el cual sera el nombre del archivo

  //Metodo que realizara una peticion http al archivo json
  getProductos(){ //Para que esta peticion funcione de forma correcta hay que irse al archivo app.config, e importar "provideClientHydration()"
    return this.http.get<Producto[]>(this.url);
  }
}
