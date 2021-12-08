import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesService } from './movies.service';
import { moviesSelector, MovieState, selectedMovieSelector} from './store/movies.reducer';

import * as MovieActions from './store/movies.actions';
import { MovieInterface } from "../../shared/interfaces/moviesInterfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<any>();

  // Movie Info
  showMovieInfo = false;
  selectedMovie!: MovieInterface | undefined;
  movies$!: Observable<MovieInterface[]>;

  constructor(
    private moviesService: MoviesService,
    private store: Store<MovieState>
  ) {
    // this.movies$ = this.store.select(moviesSelector);
    this.store.select(selectedMovieSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.selectedMovie = res;
      })
  }

  ngOnInit(): void {
    //Get Popular Movies
    this.store.dispatch(MovieActions.loadPopularMovies());

    this.store.select(moviesSelector).subscribe(res => {
      console.log(res)
    })
  }

  fetchData() {
    // Increase index value
    // this.moviesService.index++;

    // In case if index value is less than number of objects in objectsOfGenres
    // if (this.moviesService.index < this.moviesService.objectsOfGenres.length) {
    //   this.moviesService
    //     .getMoviesByGenres()
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe((res) => {
    //       this.allMoviesSections.push({
    //         genre: res.genre,
    //         movies: res.movies,
    //       });
    //     });
    // } else {
    //   // Display footer component
    //   this.moviesService.endOfPage.next(true);
    // }
  }

  onMovieInfoClick(movie?: MovieInterface) {
    //Set selectedMovie to the movie which was clicked or to undefined
    if(this.selectedMovie && this.selectedMovie === movie) {
      this.store.dispatch(MovieActions.selectMovie({ movie: undefined}))
    } else {
      this.store.dispatch(MovieActions.selectMovie({ movie }));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
