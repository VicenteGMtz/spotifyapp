import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    artistas: any[] = [];
    loading: boolean;

    constructor(private spotify: SpotifyService) {
        this.loading = false;
    }

    buscar(termino: string) {
        console.log(termino);
        this.loading = true;
        this.spotify.getArtistas(termino).subscribe((data: any) => {
            this.artistas = data;
            this.loading = false;
        });
    }
}
