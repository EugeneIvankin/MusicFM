import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';
import { Observable, Subject } from 'rxjs';
import { Artist } from './Artist';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bool: boolean;
  title = 'app';
  artists$: Observable<Artist[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private artistService: ArtistService,
    private router: Router) {}

  ngOnInit() {
    this.artists$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.artistService.searchArtists(term)),
      );
  }

  search(term: string) {
    this.bool = true;
    this.searchTerms.next(term);
  }

  searchArtists(term: string) {
    this.router.navigate(['/search_artist', term]);
  }

  searchArtist() {
    this.bool = false;
  }

  openDashboardArtists() {
    this.router.navigate(['']);
  }
}
