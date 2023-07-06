import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Etiqueta raiz o padre, id del component / hook, punto de anclaje
  templateUrl: './app.component.html',   //nuestro html
  styleUrls: ['./app.component.css']     //nuestro css
})
export class AppComponent {
  title = 'my-app';
  // AQUI VA EL JAVASCRIPT
  constructor(){
    console.log("Estamos en el constructor del APP COMPONENT");
  }
}
