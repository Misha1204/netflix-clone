import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ResponseInterface } from 'src/app/shared/interfaces/moviesInterfaces/response.interface';

import { Subject} from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from "@ngrx/store";
import {getUserEntityById, MovieState} from "./store/movies.reducer";

@Injectable({ providedIn: 'root' })
export class MoviesService {
  // Index of Genre
  index = 0;
  endOfPage = new Subject<boolean>();
  genre!: { genre: string, id?: number }[];

  constructor(private http: HttpClient, private store: Store<MovieState>) {
    // Genre Selector
    this.store.select(getUserEntityById("Popular Movies")).subscribe(res => {
      // this.genre = res;
      console.log(res)
    })
  }

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
  // getMoviesByGenres() {
  //   return this.http
  //     .get<ResponseInterface>(
  //       `https://api.themoviedb.org/3/discover/movie?api_key=${
  //         environment.api_key
  //       }&with_genres=${this.objectsOfGenres[this.index].id}`
  //     )
  //     .pipe(
  //       map((res) => {
  //         return {
  //           movies: res.results,
  //           genre: this.objectsOfGenres[this.index].genre,
  //         };
  //       })
  //     );
  // }
}
