import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ResponseInterface } from 'src/app/shared/interfaces/response.interface';
import { GenresInterface } from 'src/app/shared/interfaces/genres-array.interface';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  // Index of Genre
  index = 0;
  endOfPage = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  // GET ONLY POPULAR MOVIES
  getPopularMovies() {
    return this.http
      .get<ResponseInterface>(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${environment.api_key}`
      )
      .pipe(
        map((res) => {
          return res.results;
        })
      );
  }

  // GET MOVIES BY GENRES USING objectsOfGenres ARRAY
  getMoviesByGenres() {
    return this.http
      .get<ResponseInterface>(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          environment.api_key
        }&with_genres=${this.objectsOfGenres[this.index].id}`
      )
      .pipe(
        map((res) => {
          return {
            movies: res.results,
            genre: this.objectsOfGenres[this.index].genre,
          };
        })
      );
  }
}
