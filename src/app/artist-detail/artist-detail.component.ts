import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistDetail } from '../ArtistDetail';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent {

  private querySubscription: Subscription;
  private artistName: string;
  private artist: ArtistDetail;

  constructor(private artistService: ArtistService, private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.artistName = queryParam['name'];
      }
  );
    this.getFullInfoAboutArtist();
  }

  getFullInfoAboutArtist() {
    this.artistService.getFullInfoAboutArtist(this.artistName)
    .subscribe( artist => {
      this.artist = new ArtistDetail;
      this.artist.name = artist['artist'].name;
      this.artist.listeners = artist['artist']['stats'].listeners;
      this.artist.image = artist['artist'].image[4]['#text'];
      this.artist.bio = artist['artist'].bio.content;
    });
  }

}
