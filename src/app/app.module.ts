import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CardsComponent } from './shared/cards/cards.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    // SharedModule
    RouterModule,
    RoutesModule
    
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
