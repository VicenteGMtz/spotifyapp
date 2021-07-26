import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {
    constructor(private httpClient: HttpClient) {
        console.log('constructor services spotify');
    }

    getQuery(query: string) {
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            Authorization:
                'Bearer BQDyeE516Gmqrjcv4Kp_eUqJt94sIh7sCcPRyLeW_QJDbn8hivpsCRY59-TQL4DgRwRZnpHvaFRgnioY_FA'
        });
        return this.httpClient.get(url, { headers });
    }
    getNewReleases() {
        return this.getQuery('browse/new-releases').pipe(map((data: any) => data.albums.items));
    }

    getArtistas(termino: string) {
        return this.getQuery(`search?q=${termino}&type=artist`).pipe(map((data: any) => data.artists.items));
    }

    getArtista(idArtista: string) {
        return this.getQuery(`artists/${idArtista}`);
    }

    getTopTracks(idArtista: string) {
        return this.getQuery(`artists/${idArtista}/top-tracks?market=MX`).pipe(
            map((data: any) => data.tracks)
        );
    }
}
