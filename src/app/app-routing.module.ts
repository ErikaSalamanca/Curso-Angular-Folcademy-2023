import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './routes/peliculas/peliculas.component';
import { Route } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { InicioComponent } from './routes/inicio/inicio.component';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';


const routes: RoutesModule =[
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
    Component: SeriesComponent
  },

  {
    path: 'ingresar',
    Component: IngresarComponent
  },
  {
    path: '**',
    Component: InicioComponent
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
