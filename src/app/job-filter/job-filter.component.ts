import { HttpClient } from '@angular/common/http';
import { FilterService } from './../Data/filter.service';
import { role, technology, experience } from './../JobsData';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.css']
})
export class JobFilterComponent implements OnInit {

  roles: any = [];
  technology: any = [];
  experience: any = []

  constructor(private filterService: FilterService, private httpClient: HttpClient) { }
  form = new FormGroup({
    roles: new FormControl([]),
    technology: new FormControl([]),
    ctc: new FormControl(0),
    experience: new FormControl([]),
  });

  ngOnInit(): void {
    this.roles = role;
    this.experience = experience;
    this.technology = technology;
    this.form.valueChanges.subscribe(data => {
      this.filterService.filterData.next(data);
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    $('select').selectpicker();
  }

}
