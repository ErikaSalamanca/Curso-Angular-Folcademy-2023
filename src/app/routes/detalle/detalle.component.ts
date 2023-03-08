import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies/movies.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id: number= 0;
  media_type: string=''
  detalleMovie: any = ''

  @Input() backdrop_path: string = ''

constructor(private route: ActivatedRoute, private _moviesServices: MoviesService){}

ngOnInit(){
  this.id = Number (this.route.snapshot.paramMap.get("id")) || 0; 
  this.media_type = String (this.route.snapshot.paramMap.get("media_type")) || '';
  this.obtenerDetalle () 
}

obtenerDetalle(){
  
  this._moviesServices.getOneMovie(this.media_type, this.id).subscribe({
    next: (data) => {
      this.detalleMovie = data
      
    },
    error:(error) => {
      console.log(error);
    }
  
  })

}









}
