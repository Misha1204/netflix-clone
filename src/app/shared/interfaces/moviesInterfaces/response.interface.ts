import { MovieInterface } from './movie.interface';

export interface ResponseInterface {
  page: number;
  results: MovieInterface[];
  total_pages: number;
  total_results: number;
}
