import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { InicioComponent } from './inicio/inicio.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { LayoutModule } from '../layout/layout.module';
import { IniciarsesionComponent } from './ingresar/iniciarsesion/iniciarsesion.component';
import { RegistrarseComponent } from './ingresar/registrarse/registrarse.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PeliculasComponent,
    SeriesComponent,
    InicioComponent,
    IngresarComponent,
    RegistrarseComponent,
    IniciarsesionComponent
   
  
  ],
  
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],

  exports: [
    PeliculasComponent,
    SeriesComponent,
    InicioComponent,
    IngresarComponent,
    RegistrarseComponent,
    IniciarsesionComponent
  
  ]

})
export class RoutesModule { }