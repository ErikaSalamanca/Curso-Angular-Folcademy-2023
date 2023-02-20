import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './routes/peliculas/peliculas.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { IniciarsesionComponent } from './routes/ingresar/iniciarsesion/iniciarsesion.component';
import { RegistrarseComponent } from './routes/ingresar/registrarse/registrarse.component';


const routes: Routes=[
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
    
  },

  {
    path: 'series',
    component: SeriesComponent
  },

  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: '**',
    component: InicioComponent
  },
  {
    path: 'iniciarsesion',
    component: IniciarsesionComponent
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent
  }


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
