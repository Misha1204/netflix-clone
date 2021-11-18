import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[scrollL]' })
export class ScrollLDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('click') scrollLeft() {
    const scrollWidth = this.elRef.nativeElement.parentElement.scrollWidth;

    this.elRef.nativeElement.parentElement.scrollLeft -= scrollWidth / 5;
  }
}
