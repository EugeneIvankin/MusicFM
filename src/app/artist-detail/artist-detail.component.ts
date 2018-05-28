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

  constructor(private artistService: ArtistService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
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
      this.artist = new ArtistDetail;
      this.artist.name = artist['artist'].name;
      this.artist.listeners = artist['artist']['stats'].listeners;
      this.artist.playcount = artist['artist']['stats'].playcount;
      this.artist.image = artist['artist'].image[4]['#text'];
      this.artist.tags = artist['artist'].tags.tag.map( tag => '#' + tag.name );
      this.artist.bio = artist['artist'].bio.content;
      this.similarArtists = artist['artist'].similar.artist.map(simArtist => {
        const similarArtist = new Artist;
        similarArtist.name = simArtist.name;
        similarArtist.image = simArtist.image[4]['#text'];
        return similarArtist;
      });
      this.similarArtists.pop();
    });
  }

  getTopAlbums() {
    this.artistService.getTopAlbums(this.artistName)
    .subscribe( albums => {
      this.topAlbums = albums['topalbums'].album.map(alb => {
        const album = new Album;
        album.name = alb.name;
        album.image = alb.image[3]['#text'];
        album.artist = alb.artist.name;
        return album;
      });
    });
  }

}
