import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardTopArtistsComponent } from './dashboard-top-artists/dashboard-top-artists.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: 'artist_detail', component: ArtistDetailComponent},
  { path: 'album_detail', component: AlbumDetailComponent},
  { path: '**', component: DashboardTopArtistsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardTopArtistsComponent,
    ArtistCardComponent,
    ArtistDetailComponent,
    AlbumDetailComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }