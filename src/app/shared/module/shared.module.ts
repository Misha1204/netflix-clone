import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { IntersectionObsDirective } from '../directives/intersectionObserver.directive';
import { ScrollRDirective } from '../directives/scrollR.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollRDirective,
    IntersectionObsDirective,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ScrollRDirective,
    IntersectionObsDirective,
  ],
})
export class SharedModule {}
