import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerroWeb } from '../models/perro-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

  // DESDE AQUI, VAMOS A INTERACTUAR CON EL SERVIDOR
  static readonly URL_API_PERROS = "https://dog.ceo/api/breeds/image/random";

  /*@Autowired   //dame un sevicio
  httpClient:HttpClient;*/
// en vez de ponerlo como atributo lo meto como instancia dentro del contrustor
  constructor(private httpClient:HttpClient) { }

  getPerroAleatorio():Observable<PerroWeb>{
    // entre <comillas> indico el tipo de dato que he recibido el cuerpo del mensaje JSON
    return this.httpClient.get<PerroWeb>(PerroService.URL_API_PERROS);
  }

}
