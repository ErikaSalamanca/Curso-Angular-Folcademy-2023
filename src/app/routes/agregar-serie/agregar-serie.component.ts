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
    this.getTrendingAll();
  }

  ngOnInit() : void{
    this.getTrendingAll();
  }
   
  getTrendingAll(){
    this._moviesService.getTranding().subscribe({
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
    console.log('pelicula para agregar', newItem)
    let serieParaAgregar = this.movies_series.find(movie=>movie.id == newItem);
    console.log('peliculas encontrada', serieParaAgregar)
    this._firestoreService.create(serieParaAgregar)
  }
  
  obtenerSeriesGuardadas(){
    this._firestoreService.getAll().subscribe ({
      next:(data) =>{
        console.log(data)

      }
    })
  }


}

