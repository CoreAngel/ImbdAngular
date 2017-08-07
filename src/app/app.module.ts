import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { SearchService } from './search/search.service';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", component: SearchComponent },
      { path: "movie/:id", component: MovieComponent },
      { path: "**", redirectTo: '' }
    ])
  ],
  providers: [
    SearchService,
    MovieService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
