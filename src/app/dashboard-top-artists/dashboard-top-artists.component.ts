import { Component, OnInit } from '@angular/core';
// import { TopArtist } from '../topArtist';
import { TOP_ARTISTS } from '../mock-top-artist';

@Component({
  selector: 'app-dashboard-top-artists',
  templateUrl: './dashboard-top-artists.component.html',
  styleUrls: ['./dashboard-top-artists.component.css']
})
export class DashboardTopArtistsComponent {
  topArtists = TOP_ARTISTS;
}
