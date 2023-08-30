import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private apiUrl = 'http://localhost:3000/likes';

  constructor(private http: HttpClient) { }

  likeMovie(likeData: any): Observable<any> {
    return this.http.post(this.apiUrl, likeData);
  }
}
