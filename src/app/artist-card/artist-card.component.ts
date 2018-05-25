import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../Artist';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent  {
   @Input() artist: Artist;

   constructor(private router: Router) {}

  open() {
    this.router.navigate(['artist_detail'],
      {
        queryParams: {
          'name': this.artist.name
        }
      });
  }
}
