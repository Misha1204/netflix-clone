import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { MovieInterface } from 'src/app/shared/interfaces/movie.interface';

// Load Popular Movies
export const loadMovies = createAction('[Home Page] Load Movies');

export const loadMoviesSuccess = createAction(
  '[Home Page] Load Movies Success',
  props<{ movies: MovieInterface[] }>()
);

// Get Movies By Genres
export const loadMoviesByGenre = createAction('[Home Page] Load Movies By Genre')

export const loadMoviesByGenreSuccess = createAction(
  '[Home Page] Load Movies By Genre Success',
  props<{ movies: MovieInterface[], genre: string }>()
)

// Select Movie
export const selectMovie = createAction(
  '[Home Page] Select Movie',
  props<{ movie: MovieInterface | undefined}>()
)
