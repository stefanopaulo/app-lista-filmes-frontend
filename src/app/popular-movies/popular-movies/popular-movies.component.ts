import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/service/tmdb.service';
import { Movie } from '../model/movie';
import { LikeService } from 'src/app/service/like.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private tmdbService: TmdbService, private likeService: LikeService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMoviesList().subscribe(data => {
      this.movies = data.results.slice(0, 10);
    });
  }

  toggleLike(movie: Movie): void {
    const likeData = {
      movieId: movie.id,
      userId: 'user123',
      liked: !movie.liked
    };

    this.likeService.likeMovie(movie).subscribe(res => {
      movie.liked = !movie.liked;
    });
  }

}
