import { CountryListComponent } from './src/app/country-list/country-list.component';
import { ListsComponent } from './src/app/lists/lists.component';
import { HomeComponent } from "./src/app/home/home.component";
import { Routes } from "@angular/router";
import { MessagesComponent } from 'src/app/messages/messages.component';

export const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "countries", component: CountryListComponent },
  { path: "messages", component: MessagesComponent },
  { path: "lists", component: ListsComponent },
  { path: "**", redirectTo: 'home', pathMatch: 'full' }
];
