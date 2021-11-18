import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<any>();
  allMoviesSections: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    // Get popular movies section on init

    this.moviesService
      .getPopularMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe((popularMovies) => {
        this.allMoviesSections.push({
          genre: 'Popular Movies',
          movies: popularMovies,
        });
      });
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

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}