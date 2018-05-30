import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../Artist';


@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})

export class ArtistCardComponent  {
  @Input() artist: Artist;

  constructor(
    private router: Router) {}

  open() {
    this.router.navigate(['/artist_detail', this.artist.name]);
  }
}
