import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { MovieInterface } from 'src/app/shared/interfaces/movie.interface';
import * as MoviesActions from './movies.actions';

// Movie Adapter
export const MovieAdapter: EntityAdapter<MovieInterface> =
  createEntityAdapter<MovieInterface>({
    selectId: (movie: MovieInterface) => movie.id,
  });

// State
export interface MovieState extends EntityState<MovieInterface> {
  selectedMovie: MovieInterface | undefined;
  showMovieInfo: boolean;
}

const initialState = MovieAdapter.getInitialState({
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

// Reducer
export const moviesReducer = createReducer<MovieState>(
  initialState,
  on(MoviesActions.loadMoviesSuccess, (state, action): MovieState => {
    return MovieAdapter.setAll(action.movies, state);
  })
);
