import { Component, OnInit } from '@angular/core';
import { TOP_ARTISTS } from '../mock-top-artist';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent {

  topArtists = TOP_ARTISTS;

}
