import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './Componentes/peliculas/peliculas.component';
import { SeriesComponent } from './Componentes/series/series.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { IngresarComponent } from './Componentes/ingresar/ingresar.component';



@NgModule({
  declarations: [
    PeliculasComponent,
    SeriesComponent,
    InicioComponent,
    IngresarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
