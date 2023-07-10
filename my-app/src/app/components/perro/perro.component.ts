import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { PerroWeb } from 'src/app/models/perro-web';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent implements OnInit{

  //hay que crear un atributo para mostrar lo que hay en memoria de perroRX
  //otra forma seria:
  perroWeb !: PerroWeb;  
  rutaFoto !:string;
  raza !:string;

  observerPerros:Observer<PerroWeb> = {
    next: perroRx => {console.log('Perro recibido bien'),
                      console.log(perroRx.message),
                      console.log(perroRx.status)
                      this.rutaFoto = perroRx.message;
                      let palabrasUrl:Array<string> = perroRx.message.split('/');
                      this.raza = palabrasUrl[4];
                      console.log("raza "+this.raza)
                      // es lo otra forma
                      //this.perroweb = perroRx;

                    },
    error: fallo => console.error('Fallo en perroRx el perro: ' + fallo),
    complete: () => console.log('Comunicacón completada'),
  };


  // Llama y muestra el servicio
  constructor(private perroService:PerroService){
    console.log("Estamos cargando el componente(constructor)");
  }
  ngOnInit(): void {
    console.log("Vamos a traer un perro del servidor");
    //cuando me subcribo al observer, le estoy diciendo, que cuando vuelvas, me avisas aqui.
    //this.perroService.getPerroAleatorio().subscribe(this.observerPerros);
    console.log("Perro Solicitado.... ");
  }

  cargaPerro(){
    this.perroService.getPerroAleatorio().subscribe(this.observerPerros);
  }
 
  // TODO hacer un pie de foto que salga la raza del perro
  


}
