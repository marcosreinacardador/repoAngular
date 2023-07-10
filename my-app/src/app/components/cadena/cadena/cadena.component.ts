import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadena',
  templateUrl: './cadena.component.html',
  styleUrls: ['./cadena.component.css']
})
export class CadenaComponent implements OnInit{
  userInput: string = '';
  ponAlRevesCadena: string = '';
  longitudCadena: number = 0;
  escribeResultado:boolean = false;
  otra:boolean = false;

  construct(){
    this.userInput;
    this.ponAlRevesCadena;
    this.longitudCadena;
    this.escribeResultado;
    this.otra;
  }

  ngOnInit(): void {}

  comienza(){
    this.escribeResultado = false;
    location.reload();
  }

  convierteCadena(): void {
    this.otra = true;
    this.escribeResultado = true;
    this.ponAlRevesCadena = this.userInput.split('').reverse().join('');
    this.longitudCadena = this.userInput.length;
  }

  esParOImpar(): boolean {
    this.otra = true;
    return this.longitudCadena % 2 === 0;
  }
}
