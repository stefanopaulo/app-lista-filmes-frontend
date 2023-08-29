import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'popular-movies' },
  {
    path: 'popular-movies',
    //loadChildren: () => import('./popular-movies/popular-movies.module').then(m => m.PopularMoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
