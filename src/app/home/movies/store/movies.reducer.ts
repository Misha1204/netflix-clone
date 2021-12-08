import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { MovieInterface } from 'src/app/shared/interfaces/moviesInterfaces/movie.interface';
import * as MoviesActions from './movies.actions';
import {GenresInterface} from "../../../shared/interfaces/moviesInterfaces/genres.interface";
import {MoviesStoreInterface} from "../../../shared/interfaces/moviesInterfaces/moviesStore.interface";

// Movie Adapter
export const MovieAdapter: EntityAdapter<MoviesStoreInterface> =
  createEntityAdapter<MoviesStoreInterface>({
    selectId: (genre: MoviesStoreInterface) => genre.genre
  });

// State
export interface MovieState extends EntityState<MoviesStoreInterface> {
  objectsOfGenres: GenresInterface[];
  selectedMovie: MovieInterface | undefined;
  showMovieInfo: boolean;
}

const initialState = MovieAdapter.getInitialState({
  objectsOfGenres: [
    { genre: 'Popular Movies', id: 0 },
    { genre: 'Drama', id: 18 },
    { genre: 'Family', id: 10751 },
    { genre: 'Fantasy', id: 14 },
    { genre: 'History', id: 36 },
    { genre: 'Comedy', id: 35 },
    { genre: 'War', id: 10752 },
    { genre: 'Crime', id: 80 },
    { genre: 'Music', id: 10402 },
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

// export const selectEntity = (props: { id: number }) =>
//   createSelector(selectEntities, (entities) => {
//     return entities[props.id];
//   });

// export const selectEntity = (props: { id: any }) =>
//   createSelector(
//     getMoviesFeatureState,
//     (entities: MovieState) => entities[props.id]
//   );

export const getEntityById = (id: string) => (state: MovieState) => state.entities[id];
export const getUserEntityById = (id: string) => createSelector(getMoviesFeatureState, getEntityById(id));

// Reducer
export const moviesReducer = createReducer<MovieState>(
  initialState,
  on(MoviesActions.loadPopularMoviesSuccess, (state, action): MovieState => {
    return MovieAdapter.addOne({ genre: action.genre, movies: action.movies }, state)
  }),
  on(MoviesActions.selectMovie, (state, action): MovieState => {
    return {
      ...state,
      selectedMovie: action.movie
    }
  })
);
