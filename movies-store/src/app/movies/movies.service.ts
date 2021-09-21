import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL as BASE_API_URL } from 'settings/setting';
import { Movie } from 'models/movie.model';
// import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private MOVIE_API = `${BASE_API_URL}/movie`;
  constructor(private http: HttpClient) { }

  // public getBy = async (key?: string, value?: string) => {
  //   const url = `${ this.MOVIE_API }${ ( !!key && !!value ) ? '/' + key + '/' + value : '' }`;
  //   const result = await this.http.get<any>( url ).toPromise();
  //   return result.data;
  // }

  getBy = async ( key?: string, value?: string ): Promise<Movie[]> => {
		const url = `${ this.MOVIE_API }${ ( !!key && !!value ) ? '/' + key + '/' + value : '' }`;
		const result = await this.http.get<any>( url ).toPromise();
		return <Movie[]>result.data;

	}
}
