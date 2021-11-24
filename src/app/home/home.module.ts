import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrailerComponent } from './trailer/trailer.component';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../shared/module/shared.module';
import { MovieInfoComponent } from './movies/movie-info/movie-info.component';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './movies/store/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './movies/store/movies.effects';

@NgModule({
  declarations: [
    HomeComponent,
    TrailerComponent,
    MoviesComponent,
    MovieInfoComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
})
export class HomeModule {}
