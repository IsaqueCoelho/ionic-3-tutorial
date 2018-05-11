import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private basePath:string = "https://api.themoviedb.org/3/";
  private api_key:string = "";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  public getLatestMovies(){
    return this.http.get( this.basePath + "movie/popular?api_key=" + this.api_key);
  }

}
