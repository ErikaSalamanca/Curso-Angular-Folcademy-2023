import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { RoutesModule } from '../routes/routes.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],

  exports: [
    CardsComponent
  ]
})


export class SharedModule { }
