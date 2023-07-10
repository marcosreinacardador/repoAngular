import { Component, OnInit } from '@angular/core';

import { Observer } from 'rxjs';
import { ChucknorrisWeb } from 'src/app/models/chucknorris-web';
import { ChucknorrisService } from 'src/app/services/chucknorris.service';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.css']
})

export class ChucknorrisComponent implements OnInit {
  
  fraseCN!:string;
  chucknorrisweb!:ChucknorrisWeb;
  
  
  ok!: boolean;
  
  // Llama y muestra el servicio
  constructor(private ChucknorrisService:ChucknorrisService){
    console.log("Estamos cargando el componente(constructor)");
  }

  ngOnInit(): void {
    console.log("Vamos a traer una frase del servidor");
    //cuando me subcribo al observer, le estoy diciendo, que cuando vuelvas, me avisas aqui.
    //this.chucknorrisService.getFraseAleatoriaChuckNorris().subscribe(this.observerChuckNorris);
    console.log("Frase solicitada.... ");
  }

  /*
https://api.chucknorris.io/jokes/random
{
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "d5e3fj3kQy2zQ0m5HGR13w",
    "url": "https://api.chucknorris.io/jokes/d5e3fj3kQy2zQ0m5HGR13w",
    "value": "Chuck Norris can land a plane in Auto Pilot."
}*/
  ObserverChucknorrisWeb:Observer<ChucknorrisWeb> = {
    next: cnRx => {console.log('Frase recibida bien'),
                      this.fraseCN = cnRx.value;
                     
                    },
    error: fallo => console.error('Fallo en cnRX en frase: ' + fallo),
    complete: () => console.log('Comunicacón completada'),
  };

  cargaFrase(){
    this.ok = true;
    this.ChucknorrisService.getFraseAleatoriaChuckNorris().subscribe(this.ObserverChucknorrisWeb);
  }

}
