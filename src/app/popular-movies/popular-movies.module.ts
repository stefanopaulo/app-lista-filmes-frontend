import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularMoviesRoutingModule } from './popular-movies-routing.module';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';


@NgModule({
  declarations: [
    PopularMoviesComponent
  ],
  imports: [
    CommonModule,
    PopularMoviesRoutingModule
  ]
})
export class PopularMoviesModule { }
