import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrailerComponent } from './trailer/trailer.component';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../shared/module/shared.module';
import { MovieInfoComponent } from './movies/movie-info/movie-info.component';

@NgModule({
  declarations: [HomeComponent, TrailerComponent, MoviesComponent, MovieInfoComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
