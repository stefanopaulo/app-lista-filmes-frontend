import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PopularMoviesRoutingModule } from './popular-movies-routing.module';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';


@NgModule({
  declarations: [
    PopularMoviesComponent
  ],
  imports: [
    CommonModule,
    PopularMoviesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PopularMoviesModule { }
