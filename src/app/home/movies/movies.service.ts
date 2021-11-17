import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ResponseInterface } from 'src/app/shared/interfaces/response.interface';
import { GenresInterface } from 'src/app/shared/interfaces/genres-array.interface';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  // ARRAY OF OBJECTS OF GENRES
  objectsOfGenres: GenresInterface[] = [
    { genre: 'Drama', id: 18, movies: [] },
    { genre: 'Family', id: 10751, movies: [] },
    { genre: 'Fantasy', id: 14, movies: [] },
    { genre: 'History', id: 36, movies: [] },
    { genre: 'Comedy', id: 35, movies: [] },
    { genre: 'War', id: 10752, movies: [] },
    { genre: 'Crime', id: 80, movies: [] },
    { genre: 'Music', id: 10402, movies: [] },
  ];

  index = 0;

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
