import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiKey = 'SUA_CHAVE_DE_API_AQUI';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopularMoviesList(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=1&region=BR`;
    return this.http.get(url);
  }
}
