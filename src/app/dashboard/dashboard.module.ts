import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomseguroPipe } from '../pipes/domseguro.pipe';
import { NoimagePipe } from '../pipes/noimage.pipe';
import { ArtsistaComponent } from './components/artsista/artsista.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/shared/card/card.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [
        DashboardComponent,
        ArtsistaComponent,
        SidenavComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        NoimagePipe,
        CardComponent,
        LoadingComponent,
        DomseguroPipe
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatBadgeModule,
        MatChipsModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule
    ]
})
export class DashboardModule {}
