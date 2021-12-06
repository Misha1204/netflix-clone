import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesService } from './movies.service';
import {moviesSelector, MovieState} from './store/movies.reducer';

import * as MovieActions from './store/movies.actions';
import {MovieInterface} from "../../shared/interfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<any>();
  allMoviesSections: any = [];

  // Movie Info
  showMovieInfo = false;
  clickedMovie!: any;
  movies$!: Observable<MovieInterface[]>;

  constructor(
    private moviesService: MoviesService,
    private store: Store<MovieState>
  ) {
    this.movies$ = this.store.select(moviesSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(MovieActions.loadMovies());
  }

  fetchData() {
    // Increase index value
    this.moviesService.index++;

    // In case if index value is less than number of objects in objectsOfGenres
    if (this.moviesService.index < this.moviesService.objectsOfGenres.length) {
      this.moviesService
        .getMoviesByGenres()
        .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {
          this.allMoviesSections.push({
            genre: res.genre,
            movies: res.movies,
          });
        });
    } else {
      // Display footer component
      this.moviesService.endOfPage.next(true);
    }
  }

  onMovieInfoClick(movie?: any) {
    if (!this.showMovieInfo) {
      this.showMovieInfo = true;
      this.clickedMovie = movie;
    } else {
      this.showMovieInfo = false;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
