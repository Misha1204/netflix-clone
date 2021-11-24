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

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      mergeMap(() =>
        this.moviesService
          .getPopularMovies()
          .pipe(map((movies) => MoviesActions.loadMoviesSuccess({ movies })))
      )
    )
  );
}
