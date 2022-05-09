import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  alldata: any = [];
  countries: any = [];
  regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion = 'All';
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.shared.getAllCountries().subscribe(res => {
      this.countries = res;
      this.alldata = res;
    });
  }

  searchByname(value: any): void {
    this.countries = this.alldata.filter((country: any) => {
      if ((country.name).toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        return country;
      }
    });
  }


  filterByregion(region: any): void {
    if (region !== 'All') {
      this.countries = this.alldata.filter((country: any) => {
        if (country.region === region) {
          return country;
        }
      });
    }
    else {
      this.countries = this.alldata;
    }
  }

}
