import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-detail-countries',
  templateUrl: './detail-countries.component.html',
  styleUrls: ['./detail-countries.component.css']
})
export class DetailCountriesComponent implements OnInit {

  countries = [];
  selectCountry: any;
  borderCountries: any = [];
  constructor(private shared: SharedService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.shared.getAllCountries().subscribe(res => {
      this.countries = res;
      this.selectCountry = res.find((country: any) => '' + country.id === this.router.snapshot.params.id);
      this.getBorderCountries(this.selectCountry.borders);
    });
  }

  getBorderCountries(borders: Array<any>): void {
    this.borderCountries = [];
    borders.forEach(border => {
      this.borderCountries.push(this.countries.find((res: any) => res.alpha3Code === border));
    });
  }

}
