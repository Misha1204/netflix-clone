import {MovieInterface} from "./movie.interface";

export interface MoviesStoreInterface {
  genre: string;
  id?: number;
  movies: MovieInterface[];
}
