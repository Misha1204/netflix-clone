import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieInterface } from 'src/app/shared/interfaces/movie.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieInfoService {
  constructor(private http: HttpClient) {}

  getMovieCast(movieId: number) {
    return this.http.get<MovieInterface>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${environment.api_key}&append_to_response=credits`
    );
  }
}
