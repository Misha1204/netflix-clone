import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[scrollR]' })
export class ScrollRDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('click') scrollRight() {
    const scrollWidth = this.elRef.nativeElement.parentElement.scrollWidth;

    this.elRef.nativeElement.parentElement.scrollLeft += scrollWidth / 5;
  }
}
