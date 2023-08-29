import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/service/tmdb.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  movies: Movie[] = [];
  displayedColumns = ['title', 'overview', 'release_date', 'vote_average'];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMoviesList().subscribe(data => {
      this.movies = data.results.slice(0, 10);
    });
  }

}
