import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './routes/peliculas/peliculas.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { DashboardComponent } from './routes/ingresar/dashboard/dashboard.component';
import { RegistrarseComponent } from './routes/ingresar/registrarse/registrarse.component';
import { DetalleComponent } from './routes/detalle/detalle.component';
import { AgregarItemComponent } from './routes/agregar-item/agregar-item.component';
import { AgregarSerieComponent } from './routes/agregar-serie/agregar-serie.component';


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
    path: 'registrarse',
    component: RegistrarseComponent
  },

  {
    path: 'detalle/:media_type/:id',
    component: DetalleComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'agregarItem',
    component: AgregarItemComponent
  },

  {
    path: 'agregarSerie',
    component: AgregarSerieComponent
  },

  {
    path: '**',
    component: InicioComponent
  },


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
