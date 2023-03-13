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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp, getApp, } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  
apiKey: "AIzaSyDxVjZ4zyX7OAZfaypQGpEGCGuIZ1Krrjg",
authDomain: "pelisup-a3fb9.firebaseapp.com",
projectId: "pelisup-a3fb9",
storageBucket: "pelisup-a3fb9.appspot.com",
messagingSenderId: "884591171335",
appId: "1:884591171335:web:5e1bef829c1ac36fb957a2"

}



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    RouterModule,
    RoutesModule,
    HttpClientModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),

  ],

  
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
