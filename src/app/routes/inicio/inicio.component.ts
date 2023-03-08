import { Component, PipeTransform, } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies/movies.service';
import { MovieSerie } from 'src/app/shared/Interface/MovieSerie.interface';
import { Trending } from 'src/app/shared/Interface/Trending.interface';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [MoviesService]
})



export class InicioComponent implements PipeTransform{
  
  movies_series : any = {}

  selected: string = 'Todos';

  CambiarCategoria (value:string){
    this.selected = value;
    if (value == 'tv') {
      this.getTv();
    } else if (value == 'movies') {
      this.getMovies()
    } else(
      this.getTrendingAll()
    )
    
  }
  
  paraBuscar: string = '';

  constructor(
    private _moviesServices: MoviesService,
   
  ){
    
    
  }

  ngOnInit(): void {
    this.getTrendingAll();
  }

  getTrendingAll(){
    this._moviesServices.getTranding().subscribe({
      next: (data) => {
        this.movies_series = data;
        console.log(this.movies_series)
        for (const element of this.movies_series.results) {
          element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path
          element.backdrop_path= 'https://image.tmdb.org/t/p/w500' + element.backdrop_path
          
        }
      },
      error:(error) => {
        console.log(error);
      }
    })
  }


  getTv(){
    this._moviesServices.getSeries().subscribe({
      next: (data) => {
        this.movies_series = data;
        for (const element of this.movies_series.results) {
          element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path
          element.backdrop_path= 'https://image.tmdb.org/t/p/w500' + element.backdrop_path
          
        }
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

  getMovies(){
    this._moviesServices.getMovies().subscribe({
      next: (data) => {
        this.movies_series = data;
        for (const element of this.movies_series.results) {
          element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path
          element.backdrop_path= 'https://image.tmdb.org/t/p/w500' + element.backdrop_path
          
        }
      },
      error:(error) => {
        console.log(error);
      }
    })
  }


  buscar(value:string)
  {
    console.log (value);
  }

  

  

  filterpeliculas= '' 

  transform(arg:any): any{
    this.movies_series = [];
    for(let movie of this.movies_series){
      if (movie.name.toLowerCase().indexOf(arg.toLowerCase())> -1) {
        this.movies_series.push(movie);
        console.log(movie)
      }
    }
    
    
  }

  

}
