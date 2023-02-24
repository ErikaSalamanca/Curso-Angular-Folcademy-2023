import { Component } from '@angular/core';
import { MovieSerie } from 'src/app/shared/MovieSerie.interface';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})



export class InicioComponent {
  
  moviesSeries : MovieSerie[] = [
    {

    id: 1,
    name:'prueba',
    description: 'prueba',
    imagen: '',
    rating: 0,
    category: ''
    }

  ]

}
