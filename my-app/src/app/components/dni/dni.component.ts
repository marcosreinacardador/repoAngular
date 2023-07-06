import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {

//readonly pq es constante
//static es un atributo de la clase
//para cada etiqueta/instancia, no cambia
static readonly SECUENCIA_LETRAS_DNI:string = "TRWAGMYFPDXBNJZSQVHLCKE";
static readonly SECUENCIA_LETRAS_NIE:string = "XYZ";


  dni:string;
  letra:string;

  constructor() { 
    this.dni = "";
    this.letra="";
  }

  ngOnInit(): void {
    //let numdnimarcel : number = 25733447;
    //let resto:number =  numdnimarcel%23;
    //console.log("resto marcel = " + resto);
    //let letra:string = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    //console.log("letra marcel = " + letra);

    //hago el casting de Element (etiqueta genérica)  HtmlInputElement
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    //console.log(inputSeleccionado.value);
  }

  calculaLetra(): void {
    
    let numdni:number=0;
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> 
        document.querySelector(' [name="prefijo"]:checked');

    if(inputSeleccionado.value != "sin"){
      let dnistrin:string = inputSeleccionado.value + this.dni;
      numdni  = parseInt(dnistrin);
    } else {
      numdni = parseInt(this.dni);
    }
    console.log(`el numero introducido ${this.dni}`);
    let resto:number =  numdni % 23;
    let letra:string = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log(" y la letra es " +letra );
    
  }
}
