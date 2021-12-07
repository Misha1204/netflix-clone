import {MovieInterface} from "./movie.interface";

export interface GenresInterface {
  genre: string;
  id: number;
  movies: MovieInterface[];
}
