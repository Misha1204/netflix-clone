import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { MovieInterface } from 'src/app/shared/interfaces/movie.interface';

// Load Movies
export const loadMovies = createAction('[Home Page] Load Movies');

export const loadMoviesSuccess = createAction(
  '[Home Page] Load Movies Success',
  props<{ movies: MovieInterface[] }>()
);
