import { AuthGuard } from './src/app/guards/auth.guard';
import { CountryListComponent } from './src/app/country-list/country-list.component';
import { ListsComponent } from './src/app/lists/lists.component';
import { HomeComponent } from './src/app/home/home.component';
import { Routes } from '@angular/router';
import { MessagesComponent } from 'src/app/messages/messages.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'countries',
        component: CountryListComponent,
        canActivate: [AuthGuard]
      },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
