import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { BlackHeaderDirective } from '../directives/blackHeader.directive';
import { IntersectionObsDirective } from '../directives/intersectionObserver.directive';
import { ScrollLDirective } from '../directives/scrollL.directive';
import { ScrollRDirective } from '../directives/scrollR.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollRDirective,
    ScrollLDirective,
    IntersectionObsDirective,
    BlackHeaderDirective,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ScrollRDirective,
    IntersectionObsDirective,
    ScrollLDirective,
    BlackHeaderDirective,
  ],
})
export class SharedModule {}
