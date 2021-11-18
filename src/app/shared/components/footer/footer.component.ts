import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesService } from 'src/app/home/movies/movies.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnDestroy {
  destroy$ = new Subject<any>();
  endOfPage: boolean = false;

  constructor(private moviesService: MoviesService) {
    moviesService.endOfPage.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.endOfPage = res;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
