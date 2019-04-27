// Services & Providers
import { AlertifyService } from "./services/alertify.service";
import { ErrorInterceptorProvider } from "./services/error.interceptor";

// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap";
// Components
import { AppComponent } from "./app.component";
import { CountriesComponent } from "./countries/countries.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { CountryListComponent } from './country-list/country-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
   declarations: [
      AppComponent,
      CountriesComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      CountryListComponent,
      ListsComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
