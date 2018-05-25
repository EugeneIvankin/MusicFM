import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './Artist';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ArtistService {

  private artistName: string;
  private key = '4101158aa507942f3a32c3b6ea467090';
  private getTopArtistsURL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=' + this.key + '&format=json';
  private getArtistURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + this.artistName +
                         '&api_key=' + this.key + '&format=json';

  constructor(
    private http: HttpClient) { }

  getTopArtists () {
    return this.http.get(this.getTopArtistsURL);
  }

  getFullInfoAboutArtist(artistName) {
    this.artistName = artistName;
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + this.artistName +
    '&api_key=' + this.key + '&format=json');
  }

}
