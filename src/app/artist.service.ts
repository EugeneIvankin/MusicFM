import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './Artist';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable()
export class ArtistService {

  private artistName: string;
  private key = '4101158aa507942f3a32c3b6ea467090';
  private getTopArtistsURL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=' + this.key + '&format=json&limit=40';
  private getArtistURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + this.artistName +
                         '&api_key=' + this.key + '&format=json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  searchArtists(term): Observable<Artist[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Artist[]>('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + term + '&api_key=' +
    this.key + '&format=json&limit=5')
    .pipe(map(result => {
        const artistsList = result['results'].artistmatches.artist;
          return artistsList.map(artist => {
            return { name: artist.name, image: artist.image[0]['#text'] };
          });
      }));
  }

  getTopArtists() {
    return this.http.get(this.getTopArtistsURL);
  }

  getFullInfoAboutArtist(artistName) {
    this.artistName = artistName;
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + this.artistName +
    '&api_key=' + this.key + '&format=json');
  }

  getTopAlbums(artistName) {
    this.artistName = artistName;
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + this.artistName +
    '&api_key=' + this.key + '&format=json&limit=4');
  }

  getFullInfoAboutAlbum(artistName, albumName) {
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=' + artistName +
    '&api_key=' + this.key + '&album=' + albumName + '&format=json');
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
