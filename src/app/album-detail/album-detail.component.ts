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
  }

  ngOnInit() {
    this.querySubscription = this.route.queryParams
    .subscribe(
      (queryParam: any) => {
        this.artistName = queryParam['artist_name'];
        this.albumName = queryParam['album_name'];
      }
    );
    this.getFullInfoAboutAlbum();
  }

  getFullInfoAboutAlbum() {
    this.artistService.getFullInfoAboutAlbum(this.artistName, this.albumName)
    .subscribe( result => {
      this.album = result;
      this.tracks = result.tracks;
     });
  }
}
