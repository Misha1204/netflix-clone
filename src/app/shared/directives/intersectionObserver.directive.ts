import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[fetchGenres]',
})
export class IntersectionObsDirective implements AfterViewInit {
  @Output() public fetchGenres: EventEmitter<any> = new EventEmitter();

  index = 2;

  private _intersectionObserver?: IntersectionObserver;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this._intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.fetchGenres.emit();
            observer.unobserve(<Element>this.elRef.nativeElement);
          }
        });
      },
      {
        root: null,
        threshold: 0.9,
      }
    );

    this._intersectionObserver.observe(<Element>this.elRef.nativeElement);
  }
}
