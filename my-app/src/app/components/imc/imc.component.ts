import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit{

    userPeso:number = 0;
    userAltura:number = 0;
    imc:number = 0;
    clasificacion:string = '';
    muestrameResultado:boolean = false;
    imagenH:string = '';
    imagenM:string = '';
  
  ngOnInit(): void {}

  constructor() {
    this.userPeso;
    this.userAltura;
    this.imc;
    this.clasificacion;
    this.muestrameResultado;
    this.imagenH;
    this.imagenM;
  }

  calculaTuImc(): void{
    this.muestrameResultado = true;
    if(this.userPeso && this.userAltura){
      let alturaEnMetros = this.userAltura / 100;
      this.imc = this.userPeso / Math.pow(alturaEnMetros, 2);
    }

      if (this.imc < 16) {
          this.clasificacion = 'DESNUTRIDO';
          this.imagenH = 'desnutrido.jpeg';
          this.imagenM = 'desnutrida.jpeg';
      } else if (this.imc >= 16 && this.imc < 18) {
          this.clasificacion = 'DELGADO';
          this.imagenH = 'delgado.jpeg';
          this.imagenM = 'delgada.jpeg';
        } else if (this.imc >= 18 && this.imc < 25) {
            this.clasificacion = 'IDEAL';
            this.imagenH = 'idealh.jpeg';
            this.imagenM = 'idealm.png';
          } else if (this.imc >= 25 && this.imc < 31) {
              this.clasificacion = 'SOBREPESO';
              this.imagenH = 'obeso.jpeg';
              this.imagenM = 'obesa.jpeg';
            } else {
              this.clasificacion = 'OBESO';
              this.imagenH = 'obeso.jpeg';
              this.imagenM = 'obesa.jpeg';
      }

  }
}
