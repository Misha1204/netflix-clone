import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { MovieInterface } from 'src/app/shared/interfaces/movie.interface';
import * as MoviesActions from './movies.actions';
import {GenresInterface} from "../../../shared/interfaces/genres-array.interface";

// Movie Adapter
export const MovieAdapter: EntityAdapter<GenresInterface> =
  createEntityAdapter<GenresInterface>({
    selectId: (genres: GenresInterface) => genres.id,
  });

// State
export interface MovieState extends EntityState<GenresInterface> {
  objectsOfGenres: GenresInterface[];
  selectedMovie: MovieInterface | undefined;
  showMovieInfo: boolean;
}

const initialState = MovieAdapter.getInitialState({
  objectsOfGenres: [
    { genre: 'Drama', id: 18, movies: [] },
    { genre: 'Family', id: 10751, movies: [] },
    { genre: 'Fantasy', id: 14, movies: [] },
    { genre: 'History', id: 36, movies: [] },
    { genre: 'Comedy', id: 35, movies: [] },
    { genre: 'War', id: 10752, movies: [] },
    { genre: 'Crime', id: 80, movies: [] },
    { genre: 'Music', id: 10402, movies: [] },
  ],
  selectedMovie: undefined,
  showMovieInfo: false,
});

// Selectors
const MovieSelectors = MovieAdapter.getSelectors();

export const getMoviesFeatureState =
  createFeatureSelector<MovieState>('movies');

export const moviesSelector = createSelector(
  getMoviesFeatureState,
  MovieSelectors.selectAll
);

export const selectedMovieSelector = createSelector(
  getMoviesFeatureState,
  (state) => state.selectedMovie
);

export const genreSelector = createSelector(
  getMoviesFeatureState,
  (state) => state.objectsOfGenres
)

// Reducer
export const moviesReducer = createReducer<MovieState>(
  initialState,
  on(MoviesActions.loadMoviesSuccess, (state, action): MovieState => {
    return MovieAdapter.setAll(action.movies, state);
  }),
  on(MoviesActions.selectMovie, (state, action): MovieState => {
    return {
      ...state,
      selectedMovie: action.movie
    }
  })
);
