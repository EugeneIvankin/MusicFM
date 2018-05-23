import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../Artist';


@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent  {
   @Input() artist: Artist;
}
