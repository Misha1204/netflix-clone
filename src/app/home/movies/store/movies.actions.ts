import { createAction, props } from '@ngrx/store';
import { MovieInterface } from 'src/app/shared/interfaces/moviesInterfaces/movie.interface';

// Load Popular Movies
export const loadPopularMovies = createAction('[Home Page] Load Movies');

export const loadPopularMoviesSuccess = createAction(
  '[Home Page] Load Movies Success',
  props<{ genre: string, movies: MovieInterface[] }>()
);

// Get Movies By Genres
export const loadMoviesByGenre = createAction('[Home Page] Load Movies By Genre')

export const loadMoviesByGenreSuccess = createAction(
  '[Home Page] Load Movies By Genre Success',
  props<{ genre: string, movies: MovieInterface[] }>()
)

// Select Movie
export const selectMovie = createAction(
  '[Home Page] Select Movie',
  props<{ movie: MovieInterface | undefined}>()
)
