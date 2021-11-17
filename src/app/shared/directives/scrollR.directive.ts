import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[scrollR]' })
export class ScrollRDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') scrollRight() {
    const scrollWidth =
      this.elRef.nativeElement.parentElement.parentElement.scrollWidth;

    this.elRef.nativeElement.parentElement.parentElement.scrollLeft +=
      scrollWidth / 3.3333;
  }
}
