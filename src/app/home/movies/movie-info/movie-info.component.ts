import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieInterface } from 'src/app/shared/interfaces/moviesInterfaces/movie.interface';
import { MovieInfoService } from './movie-info.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  @Input() clickedMovie!: MovieInterface;
  @Output() closeMovieInfo = new EventEmitter();

  constructor(private movieInfoService: MovieInfoService) {}

  ngOnInit(): void {
    this.movieInfoService
      .getMovieCast(this.clickedMovie.id)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onCloseMovieInfo() {
    this.closeMovieInfo.emit();
  }
}
