import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
    selector: 'app-artsista',
    templateUrl: './artsista.component.html',
    styleUrls: ['./artsista.component.scss']
})
export class ArtsistaComponent implements OnInit {
    artista: any = [];
    loading: boolean;
    tracks: any = [];

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
        this.loading = true;
        this.router.params.subscribe((params) => {
            console.log(params['id']);
            this.getArtista(params['id']);
            this.getTopTracks(params['id']);
        });
    }

    getArtista(idArtista: string) {
        this.loading = true;
        this.spotify.getArtista(idArtista).subscribe((artista) => {
            this.artista = artista;
            this.loading = false;
            console.log('artista', artista);
        });
    }
    getTopTracks(idArtista: string) {
        this.spotify.getTopTracks(idArtista).subscribe((tracks: any) => {
            console.log(tracks);
            this.tracks = tracks;
        });
    }

    ngOnInit(): void {}
}
