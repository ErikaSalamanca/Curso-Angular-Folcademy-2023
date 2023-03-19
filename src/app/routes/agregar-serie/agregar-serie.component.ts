import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { MoviesService } from 'src/app/Services/movies/movies.service';


@Component({
  selector: 'app-agregar-serie',
  templateUrl: './agregar-serie.component.html',
  styleUrls: ['./agregar-serie.component.css'],
  providers: [MoviesService, FirestoreService]
  
})
export class AgregarSerieComponent {
  
  movies_series: any[] = [];

  constructor(
    private _moviesService: MoviesService,
    private _firestoreService: FirestoreService
  ){
    this.getTv();
  }

  ngOnInit() : void{
    this.getTv();
  }
   
  getTv(){
    this._moviesService.getSeries().subscribe({
      next: (data) => {
        console.log(data)
        this.movies_series = data.results;
        for (const element of this.movies_series) {
          element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path
          element.backdrop_path= 'https://image.tmdb.org/t/p/w500' + element.backdrop_path
          
        }
      },

      error:(error) => {
        console.log(error);
      }
      
    })
  }

  addItem(newItem: number){
    console.log('serie para agregar', newItem)
    let serieParaAgregar = this.movies_series.find(movie=>movie.id == newItem);
    console.log('serie encontrada', serieParaAgregar)
    this._firestoreService.createSerie(serieParaAgregar)
  }
  
  obtenerSeriesGuardadas(){
    this._firestoreService.getTv().subscribe ({
      next:(data) =>{
        console.log(data)

      }
    })
  }


}

