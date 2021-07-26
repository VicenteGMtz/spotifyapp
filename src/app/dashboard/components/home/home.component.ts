import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    nuevasCanciones: any[] = [];
    loading: boolean;
    error: boolean;
    message: string = '';

    constructor(private spotify: SpotifyService) {
        this.error = false;
        this.loading = true;
        this.spotify.getNewReleases().subscribe(
            (releases: any) => {
                console.log('releasesSS', releases);
                this.nuevasCanciones = releases;
                this.loading = false;
            },
            (error) => {
                this.loading = false;
                this.error = true;
                this.message = error.error.error.message;
            }
        );
    }
}
