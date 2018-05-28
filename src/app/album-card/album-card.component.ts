import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../Album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent  {
  @Input() album: Album;

  constructor(private router: Router) { }

  open() {
    this.router.navigate(['album_detail'],
      {
        queryParams: {
          'album_name': this.album.name,
          'artist_name': this.album.artist
        }
      });
  }
}
