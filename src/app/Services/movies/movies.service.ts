import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http' ;
import { Trending } from 'src/app/shared/Interface/Trending.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  

  api_Key = '77d4bdd91e70e1c691bc265726ebb489';

  base_url = 'https://api.themoviedb.org/3/';

  // headers : HttpHeaders = new HttpHeaders().set('Authorization','Bearer'+ this.api_Key).set('Content-Type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');

  constructor(
    private _http: HttpClient,
  ) { }


  getTranding(): Observable<Trending> {
    
    return this._http.get<Trending>(this.base_url + 'trending/all/week', {
      params:{
        api_key: this.api_Key,
        Language: 'es-Es'
      }
    })
  }


  getMovies(): Observable<any> {
    
    return this._http.get(this.base_url + 'movie/popular', {
      params:{
        api_key: this.api_Key,
        Language: 'es-Es'
      }
    })
  }


  getSeries(): Observable<any> {
    
    return this._http.get(this.base_url + 'tv/popular', {
       params:{
        api_key: this.api_Key,
        Language: 'es-Es'
      }
    })
  }
}

