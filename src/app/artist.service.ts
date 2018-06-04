import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './Artist';
import {Observable, of, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { ArtistDetail } from './ArtistDetail';
import { Album } from './Album';
import { AlbumDetail } from './AlbumDetail';
import * as lastfmAPI from './lastfm.config';


@Injectable()
export class ArtistService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  searchArtists(term: string): Observable<Artist[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Artist[]>(lastfmAPI.serchArtistsURl + term)
    .pipe(map(result => {
        const artistsList = result['results'].artistmatches.artist;
          return artistsList.map(artist => {
            return {
              name: artist.name,
              image: artist.image[0]['#text']
            };
          });
      }));
  }

  searchAllArtists(artist: string): Observable<Artist[]> {
    if (!artist.trim()) {
      return of([]);
    }
    return this.http.get<Artist[]>(lastfmAPI.serchAllArtistsURl + artist)
    .pipe(map(result => {
        const artistsList = result['results'].artistmatches.artist;
          return artistsList.map(art => {
            return {
              name: art.name,
              listeners: art.listeners,
              image: art.image[4]['#text']
            };
          });
      }));
  }

  getTopArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(lastfmAPI.getTopArtistsURL)
    .pipe(map(result => {
      const topArtistsList = result['artists'].artist;
      return topArtistsList.map(artist => {
        return {
          name: artist.name,
          listeners: artist.listeners,
          image: artist.image[4]['#text']
        };
      });
    }));
  }

  getFullInfoAboutArtist(artistName: string): Observable<ArtistDetail> {
    return this.http.get<ArtistDetail>(lastfmAPI.getFullInfoAboutArtistURL + artistName)
    .pipe(map(result => {
      return {
        name: result['artist'].name,
        listeners: result['artist'].stats.listeners,
        playcount: result['artist'].stats.playcount,
        bio: result['artist'].bio.summary.substr(0, (result['artist'].bio.summary.indexOf('<a') - 1)),
        image: result['artist'].image[4]['#text'],
        tags: result['artist'].tags.tag.map( tag => '#' + tag.name ),
        similarArtists: result['artist'].similar.artist
        .filter((artist, count) => count < 4)
        .map(artist => {
          return {
            name: artist.name,
            image: artist.image[4]['#text']
          };
        }),
      };
    }));
  }

  getTopAlbums(artistName: string): Observable<Album[]> {
    return this.http.get<Album[]>(lastfmAPI.getTopAlbumsURL + artistName)
    .pipe(map(result => {
      const topAlbums = result['topalbums'].album;
      return topAlbums.map(album => {
        return {
          name: album.name,
          image: album.image[3]['#text'],
          artist: album.artist.name
        };
      });
    }));
  }

  getFullInfoAboutAlbum(artistName, albumName): Observable<AlbumDetail> {
    return this.http.get<AlbumDetail>(lastfmAPI.getFullInfoAboutAlbumURL + artistName + '&album=' + albumName)
    .pipe(map(result => {
      if ('content' in result['album']) {
          return {
              name: result['album'].name,
              artist: result['album'].artist,
              listeners: result['album'].listeners,
              playcount: result['album'].playcount,
              wiki: result['album'].wiki.content.substr(0, (result['album'].wiki.content.indexOf('<a') - 1)),
              image: result['album'].image[4]['#text'],
              tags: result['album'].tags.tag.map( tag => '#' + tag.name ),
              tracks: result['album'].tracks.track.map( track => track.name +
                  ' ( ' + Math.round(track.duration / 60) + 'min ' + track.duration % 60  + 's ) ')
          };
      }
      return {
          name: result['album'].name,
          artist: result['album'].artist,
          listeners: result['album'].listeners,
          playcount: result['album'].playcount,
          wiki: false,
          image: result['album'].image[4]['#text'],
          tags: result['album'].tags.tag.map( tag => '#' + tag.name ),
          tracks: result['album'].tracks.track.map( track => track.name +
              ' ( ' + Math.round(track.duration / 60) + 'min ' + track.duration % 60  + 's ) ')
      };
    }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
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

  /** Log a ArtistService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ArtistService: ' + message);
  }

}
