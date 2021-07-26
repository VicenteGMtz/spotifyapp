import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtsistaComponent } from './components/artsista/artsista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';

const routes: Routes = [
    {
        path: '',
        component: SidenavComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                pathMatch: 'full'
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'artista/:id',
                component: ArtsistaComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
