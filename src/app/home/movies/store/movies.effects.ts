import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { MoviesService } from '../movies.service';

import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  loadPopularMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadPopularMovies),
      mergeMap(() => {
        return this.moviesService.getPopularMovies().pipe(
          map((movies) => {
            console.log(movies)
            return MoviesActions.loadPopularMoviesSuccess({ genre: "Popular Movies", movies })
          })
        )
      })
    )
  })

  loadMoviesByGenre = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadMoviesByGenre),
      mergeMap(() => {
        return this.moviesService.getPopularMovies().pipe(
          map((movies) => {
            return MoviesActions.loadMoviesByGenreSuccess({ genre: "Something", movies })
          })
        )
      })
    )
  })

  // loadMoviesByGenre = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(MoviesActions.loadMoviesByGenre),
  //     mergeMap(() =>
  //       this.moviesService
  //         .getMoviesByGenres()
  //         .pipe(map((data) => MoviesActions.loadMoviesByGenreSuccess({ movies: data.movies, genre: data.genre})))
  //     )
  //   ))
}
