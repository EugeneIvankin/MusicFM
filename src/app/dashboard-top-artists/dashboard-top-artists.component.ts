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
   topArtist: Artist;

  constructor(private artistService: ArtistService) {
   }

  ngOnInit() {
    this.getTopArtists();
  }

  getTopArtists() {
    this.artistService.getTopArtists()
      .subscribe( topArtist => {
        this.topArtists = topArtist['artists']['artist'].map(artist => {
          this.topArtist = new Artist;
          this.topArtist.name = artist.name;
          this.topArtist.listeners = artist.listeners;
          this.topArtist.image = artist.image[4]['#text'];
          return this.topArtist;
        });
      });
  }

}
