import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MoviesService } from 'src/app/home/movies/movies.service';

@Directive({
  selector: '[fetchGenres]',
})
export class IntersectionObsDirective implements OnInit, AfterViewInit {
  @Input() debounceTime = 0;
  @Input() threshold = 1;

  @Output() public fetchGenres: EventEmitter<any> = new EventEmitter();

  index = 2;

  private _intersectionObserver?: IntersectionObserver;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    // const section = document.querySelector('section');
    // const options = {};
    // const myObserver = new IntersectionObserver((entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       this.moviesService.getMoviesByGenres().subscribe((res) => {
    //         console.log(res);
    //       });
    //     }
    //   });
    // }, options);
    // myObserver.observe(section);
  }

  ngAfterViewInit() {
    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.fetchGenres.emit();
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    this._intersectionObserver.observe(<Element>this.elRef.nativeElement);
  }
}
