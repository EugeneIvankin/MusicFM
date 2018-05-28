import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../Artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar-artist-card',
  templateUrl: './similar-artist-card.component.html',
  styleUrls: ['./similar-artist-card.component.css']
})
export class SimilarArtistCardComponent {

  @Input() artist: Artist;

   constructor(private router: Router) {}

  open() {
    this.router.navigate(['/artist_detail', this.artist.name]);
  }
}
