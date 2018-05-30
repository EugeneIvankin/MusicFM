import { Component, OnInit } from '@angular/core';
import { Artist } from '../Artist';
import { ArtistService } from '../artist.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-search-artists',
  templateUrl: './dashboard-search-artists.component.html',
  styleUrls: ['./dashboard-search-artists.component.css']
})
export class DashboardSearchArtistsComponent implements OnInit {
  private querySubscription: Subscription;
  private artistName: string;

  searchAllArtists: Artist [];

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.querySubscription = this.route.params
    .subscribe( queryParams => {
      this.artistName = queryParams['name'];
      this.searchArtists(this.artistName);
      window.scrollTo(0, 0);
      }
    );
  }

  searchArtists(artist) {
    this.artistService.searchAllArtists(artist)
      .subscribe( result => this.searchAllArtists = result);
  }
}
