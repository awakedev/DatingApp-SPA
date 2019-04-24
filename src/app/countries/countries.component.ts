import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {
  countries: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCountries();
  }


  getCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(response => {
      this.countries = response;
    }, error => {
      console.log(error);
    });
  }
}
