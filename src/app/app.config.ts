import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; //Importacion del archivo provideHttpClient

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient() //Es importante realizar la importacion, ya que si no dara error al momento de consumir la peticion HTTP.
  ]

};
