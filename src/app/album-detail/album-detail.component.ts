import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumDetail } from '../AlbumDetail';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  private querySubscription: Subscription;
  private artistName: string;
  private albumName: string;
  private album: AlbumDetail;
  private tracks: string [];

  constructor(private artistService: ArtistService, private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
    (queryParam: any) => {
      this.artistName = queryParam['artist_name'];
      this.albumName = queryParam['album_name'];
    }
);
  this.getFullInfoAboutAlbum();
}

  ngOnInit() {
  }

  getFullInfoAboutAlbum() {
    this.artistService.getFullInfoAboutAlbum(this.artistName, this.albumName)
    .subscribe( alb => {
        this.album = new AlbumDetail;
        this.album.name = alb['album'].name;
        this.album.image = alb['album'].image[3]['#text'];
        this.album.artist = alb['album'].artist;
        this.album.listeners = alb['album'].listeners;
        this.album.playcount = alb['album'].playcount;
        this.album.tags = alb['album'].tags.tag.map( tag => '#' + tag.name );
        this.tracks = alb['album'].tracks.track.map( track => track.name +
           ' ( ' + Math.round(track.duration / 60) + 'min ' + track.duration % 60  + 's ) ');
        this.album.wiki = alb['album'].wiki.content;
    });
  }
}
