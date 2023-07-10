import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { CadenaComponent } from './components/cadena/cadena/cadena.component';
import { ImcComponent } from './components/imc/imc.component';


// Array de rutas tengo que tener una ruta 
// que será el path asociado al componente
const routes: Routes = [
  {path:"dni", component: DniComponent},
  {path:"perros", component: PerroComponent},
  {path:"adivina", component: AdivinaComponent},
  {path:"cadena", component: CadenaComponent},
  {path:"imc", component: ImcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
