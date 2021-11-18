import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[blackHeader]',
})
export class BlackHeaderDirective implements AfterViewInit {
  index = 2;

  private _intersectionObserver?: IntersectionObserver;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this._intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            this.elRef.nativeElement.style.backgroundColor = 'black';
            // observer.unobserve(<Element>this.elRef.nativeElement);
          }
        });
      },
      {
        root: document.querySelector('section'),
        threshold: 0.8,
      }
    );

    this._intersectionObserver.observe(<Element>this.elRef.nativeElement);
  }

  // @HostListener('window:scroll') scrollDown() {
  //   console.log('Hi');

  //   // CHANGE HEADER BACKGROUND COLOR
  //   if (window.scrollY > 500) {
  //     console.log('Hi');

  //     this.elRef.nativeElement.style.backgroundColor = 'black';
  //   } else {
  //     this.elRef.nativeElement.style.backgroundColor = 'transparent';
  //   }
  // }
}
