import { Component, OnInit } from '@angular/core';
import { Artist } from '../Artist';
import { ArtistService } from '../artist.service';


@Component({
  selector: 'app-dashboard-top-artists',
  templateUrl: './dashboard-top-artists.component.html',
  styleUrls: ['./dashboard-top-artists.component.css']
})
export class DashboardTopArtistsComponent implements OnInit {

  topArtists: Artist [];

  constructor(
    private artistService: ArtistService) {}

  ngOnInit() {
    this.getTopArtists();
  }

  getTopArtists() {
    this.artistService.getTopArtists()
      .subscribe( result => this.topArtists = result);
  }

}
