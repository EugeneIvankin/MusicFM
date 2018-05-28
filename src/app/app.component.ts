import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';
import { Observable, Subject } from 'rxjs';
import { Artist } from './Artist';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  title = 'app';
  artists$: Observable<Artist[]>;
  private searchTerms = new Subject<string>();

  constructor(private artistService: ArtistService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.artists$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.artistService.searchArtists(term)),
    );
  }

  open() {
    console.log(this.name);
  }

}
