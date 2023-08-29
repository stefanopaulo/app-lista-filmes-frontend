import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/service/tmdb.service';

@Component({
  selector: 'app-popular-movie-list',
  templateUrl: './popular-movie-list.component.html',
  styleUrls: ['./popular-movie-list.component.scss']
})
export class PopularMovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMoviesList().subscribe(data => {
      this.movies = data.results;
    });
  }

  likeMovie(movie: any): void {
    console.log(`Filme ${movie.title} curtido!`);
  }

}
