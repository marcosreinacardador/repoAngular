import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  titulo:string;
  numusuario:number;
  numadivina:number = 0;
  intentos:number;
  horainicio:number;
  tiempotranscurrido:number;
  finpartida:boolean;

  /*
    HACED UNA APP DONDE EL PROGRAMA PIENSE UN NÚMERO
    DEL 1 AL 100, 
    
    EL USUARIO TIENE QUE AVERIGUAR EL NÚMERO
    PENSADO EN LA MÁQUINA

    POR CADA INTENTO, SI FALLA, LE DEMOS UNA PISTA SI EL NUMERO
    ES MENOR O MAYOR AL INTRODUCIDO

    SI ACIERTA LE DAMOS LA ENHORABUENA

    SI SUPERA LOS 5 INTENTOS PUES LE DECIMOS QUE HA PERDIDO
    Y LA SOLUCIÓN
  */
  
  constructor() {
    console.log("estamos en el constructor");
    this.titulo = "Adivina un número en 5 intentos: ";
    this.numusuario = 0;
    this.numadivina = this.calcularNumAleatorioDe1a100();
    this.intentos = 5;
    this.finpartida = false;
    this.horainicio = Date.now();
    this.tiempotranscurrido = 0;
    console.log('numero a adivinar ${this.numadivina} por el usuario');
    //TODO:calcular el numero a adivinar
  }
  ngOnInit(): void {  // Se inicia el ciclo de vida o evento
    //throw new Error('Method not implemented.');
    console.log("Estamos en OnInit");
  }

  calcularNumAleatorioDe1a100():number{
    let numgeneral:number=0;
    
    numgeneral = Math.floor(Math.random() * 100) + 1;
    console.log(numgeneral);
    return numgeneral;

  }
  iniciaJuego() {
    location.reload();
    
  }

  formatearTiempo(tiempo:number): string {
    const minutos = Math.floor(tiempo/60000);
    const segundos = Math.floor((tiempo % 60000) / 1000);
    return `${minutos} min ${segundos} seg`
  }

  comprobarIntento() {
    console.log(`Comprobado intento ${this.intentos}`);
    
      if(this.numusuario === this.numadivina){
        this.tiempotranscurrido = Date.now() - this.horainicio;
        window.alert(`Bravo, has acertado el número  ${this.numusuario} tiempo: ${this.formatearTiempo(this.tiempotranscurrido)}`);
        this.finpartida = true;
      } else if (this.numusuario === 0) {
        window.alert("Aviso: debes de introducir un número del 0 al 100");
        this.iniciaJuego();

      } else if(this.intentos == 0) {
        this.tiempotranscurrido = Date.now() - this.horainicio;
        window.alert(`Lo siento, has agotado el número de intentos, el numero era ${this.numadivina} tiempo: ${this.formatearTiempo(this.tiempotranscurrido)}`);
      } else if (this.numusuario < this.numadivina){        
        window.alert(`Ohhh! caliente caliente, ${this.numusuario} es menor que el tienes que adivinar.`);
        this.intentos--;
      } else {
        window.alert(` Ohhh! frio frio, ${this.numusuario} es mayor que el tienes que adivinar.`);
        this.intentos--;
      } 
        
      }
    

    //window.alert('MENSAJE USUARIO');  
  }


