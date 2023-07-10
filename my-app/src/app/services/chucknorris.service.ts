import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChucknorrisWeb } from '../models/chucknorris-web';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {

    // DESDE AQUI, VAMOS A INTERACTUAR CON EL SERVIDOR
    static readonly URL_API_CHUCKNORRIS = "https://api.chucknorris.io/jokes/random";

  constructor(private http:HttpClient) { }

  getFraseAleatoriaChuckNorris(): Observable<ChucknorrisWeb>{
    return this.http.get<ChucknorrisWeb>(ChucknorrisService.URL_API_CHUCKNORRIS);
  }
}
