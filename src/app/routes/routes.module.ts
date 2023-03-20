import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { InicioComponent } from './inicio/inicio.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { DashboardComponent} from './ingresar/dashboard/dashboard.component';
import { RegistrarseComponent } from './ingresar/registrarse/registrarse.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import { AgregarItemComponent } from './agregar-item/agregar-item.component';
import { AgregarSerieComponent } from './agregar-serie/agregar-serie.component';


@NgModule({
  declarations: [
    PeliculasComponent,
    SeriesComponent,
    InicioComponent,
    IngresarComponent,
    RegistrarseComponent,
    DashboardComponent,
    DetalleComponent,
    AgregarItemComponent,
    AgregarSerieComponent
   
  
  ],
  
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],

  exports: [
    PeliculasComponent,
    SeriesComponent,
    InicioComponent,
    IngresarComponent,
    RegistrarseComponent,
    DashboardComponent,
    DetalleComponent,
    AgregarItemComponent,
    AgregarSerieComponent
  
  ]

})
export class RoutesModule { }