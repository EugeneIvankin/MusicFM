import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardTopArtistsComponent } from './dashboard-top-artists/dashboard-top-artists.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import {Routes, RouterModule} from '@angular/router';
import { ArtistService } from './artist.service';
import { HttpClientModule } from '@angular/common/http';
import { SimilarArtistCardComponent } from './similar-artist-card/similar-artist-card.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { DashboardSearchArtistsComponent } from './dashboard-search-artists/dashboard-search-artists.component';

const appRoutes: Routes = [
  { path: '', component: DashboardTopArtistsComponent},
  { path: 'artist/:name', component: ArtistDetailComponent},
  { path: 'search_artist/:name', component: DashboardSearchArtistsComponent},
  { path: 'artist/:name/album/:name', component: AlbumDetailComponent},
  { path: '**', component: DashboardTopArtistsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardTopArtistsComponent,
    ArtistCardComponent,
    ArtistDetailComponent,
    AlbumDetailComponent,
    AlbumCardComponent,
    SimilarArtistCardComponent,
    BreadcrumsComponent,
    DashboardSearchArtistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
