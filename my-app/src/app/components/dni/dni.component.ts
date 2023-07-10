import { Component, Input, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Dni } from 'src/app/models/dni';

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
  dni:string;
  letra:string;

  listaDnis:Array<Dni>;
  

  constructor() { 
    this.dni = "";
    this.letra = "";
    this.listaDnis = new Array<Dni>();
  
    
  }

  ngOnInit(): void {
    //let numdnimarcel : number = 25733447;
    //let resto:number =  numdnimarcel%23;
    //console.log("resto marcel = " + resto);
    //let letra:string = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    //console.log("letra marcel = " + letra);

    //hago el casting de Element (etiqueta genérica)  HtmlInputElement
    //let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    //console.log(inputSeleccionado.value);
  }
  
  

  calculaLetra(): void {
    let dni:Dni=new Dni();  // creamos dni nuevo
    let numdni:number;
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    
    //this.esDNI = true
    if(inputSeleccionado.value != "sin" ){
      let dnistrin:string = inputSeleccionado.value + this.dni;
      numdni  = parseInt(dnistrin);
      dni.prefijo = inputSeleccionado.id;
    } else {
      numdni = parseInt(this.dni);
    }
    console.log(`el numero introducido ${this.dni}`);
    let resto:number =  numdni % 23;
    let letra:string = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log(" y la letra es " + letra );
    window.alert(`Tú DNI con letra es: ${this.dni}${letra}`)
    
    //this.listaDnis.push  mete dnis en el array
    dni.letra = letra;
    dni.numero = parseInt(this.dni);
    
    // desde que se hace el callbacks
    this.listaDnis.push(dni);
    this.mostrarLista();
    this.mostrarDni();
    this.ordenarPorNumero();
    this.ordenarPorLetra();
  }

  mostrarLista(): void{
    console.log("Mostrando lista");
    this.listaDnis.forEach(d => {
      console.log(`Dni = ${d.prefijo}${d.numero}${d.prefijo}`)
    }
  )}

  //TODO Hacer un metodo que me saque solo la lista de dni extranjeros.
  mostrarDni():void {
    
    let dnisExtranjeros = this.listaDnis.filter(dni => dni.prefijo != '')
    console.log(dnisExtranjeros);
  }

  ordenarPorNumero(): void{
    //TODO ordenar por numero por dni
    this.listaDnis.sort((dni1,dni2) => dni1.numero - dni2.numero);
  }

  // TODO añadir un boton ordenar por letra  
  /**
   * palabras.sort((a, b) => {
  return a.localeCompare(b);
  });
   */

  ordenarPorLetra(): void{
    
    this.listaDnis.sort((dni1Letra, dni2Letra) =>
     { return dni1Letra.letra.localeCompare(dni2Letra.letra);});
  }
  
}
