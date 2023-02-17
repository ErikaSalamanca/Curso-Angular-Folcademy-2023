import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './routes/Componentes/peliculas/peliculas.component';
import { Route } from '@angular/router';
import { RoutesModule } from './routes/routes.module';


const routes: RoutesModule =[
  {
    path: 'Inicio',
    component:'InicioComponent'
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
    
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
