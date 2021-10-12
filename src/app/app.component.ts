import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'json-test';

  displayedColumns: string[] = [
    'id',
    'name',
    'brewery_type',
    'street',
    'address_2',
    'address_3',
    'city',
    'state',
    'country_province',
    'postal_code',
    'country',
    'longitude',
    'latitude',
    'phone',
    'website_url',
    'updated_at',
    'created_at'
  ];

  dataSource: any[] = [];

  constructor(private http: HttpClient) { }
  url = "https://api.openbrewerydb.org/breweries";
  httpData: any;

  ngOnInit() {
    this.http.get<Kafein[]>(this.url).subscribe(data => {
      this.httpData = data;
    })

  }

}
interface Kafein {
  name: string;
  address: string;
}
