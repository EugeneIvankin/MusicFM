import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistDetail } from '../ArtistDetail';
import { Artist } from '../Artist';
import { Album } from '../Album';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  private querySubscription: Subscription;
  private artistName: string;
  private artist: ArtistDetail;
  private similarArtists: Artist [];
  private topAlbums: Album [];

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.querySubscription = this.route.params
    .subscribe( queryParams => {
      this.artistName = queryParams['name'];
      this.getFullInfoAboutArtist();
      this.getTopAlbums();
      window.scrollTo(0, 0);
      }
    );
  }

  getFullInfoAboutArtist() {
    this.artistService.getFullInfoAboutArtist(this.artistName)
    .subscribe( artist => {
      this.artist = artist;
      this.similarArtists = artist.similarArtists;
     });
  }

  getTopAlbums() {
    this.artistService.getTopAlbums(this.artistName)
    .subscribe( result => this.topAlbums = result );
  }

}
