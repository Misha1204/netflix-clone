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
  allMoviesSections: any = [];

  destroy$ = new Subject();

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
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
    this.moviesService.index++;
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
    }
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }
}
