import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() Items: any[] = [];
    constructor(private router: Router) {}

    verArtista(item: any) {
        console.log(item);
        let idArtista = '';
        if (item.type === 'artist') {
            idArtista = item.id;
        } else {
            idArtista = item.artists[0].id;
        }

        this.router.navigate(['artista', idArtista]);

        console.log('idArtista', idArtista);
    }
}
