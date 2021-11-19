import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blackHeader]',
})
export class BlackHeaderDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('window:scroll') scrollDown() {
    // CHANGE HEADER BACKGROUND COLOR
    if (window.scrollY > 700) {
      this.elRef.nativeElement.style.backgroundColor = 'black';
    } else {
      this.elRef.nativeElement.style.backgroundColor = 'transparent';
    }
  }
}
