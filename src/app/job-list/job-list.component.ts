import { FilterService } from './../Data/filter.service';
import { data } from './../JobsData';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];
  filterJobs: any;
  limit = 4;
  start = 0;
  end = 4;
  data = [];

  constructor(private filterService: FilterService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('assets/data.json').subscribe((res: any) => {
      this.jobs = res.data;
      this.data = res.data;
    });
    this.filterService.filterData.subscribe(filter => {
      console.log(filter);
      if (filter) {
        this.jobs = this.data.filter((value: any) => {
          if (value.ctc >= filter.ctc) {
            if (this.checkTechnology(filter.technology, value.technology) &&
              this.checkRole(filter.roles, value.role) &&
              this.checkExperience(filter.experience, value.experience)) {
              return value;
            }
          }
        }
        );
        this.start = 0;
        this.end = this.limit;
      }
    });
  }

  checkTechnology(a: any[], b: string | any[]): boolean {
    if (a.length) {
      return a.some((res: any) => b.includes(res));
    }
    else {
      return true;
    }
  }

  checkRole(a: string | any[], b: any): boolean {
    if (a.length) {
      return a.includes(b);
    } else {
      return true;
    }
  }
  checkExperience(a: string | any[], b: any): boolean {
    if (a.length) {
      return a.includes(b);
    } else {
      return true;
    }
  }

  changePage(start: number): void {
    this.start = start;
    this.end = this.start + this.limit;
  }

  jobDetail(id: any): void {
    this.router.navigate([`detail/${id}`]);
  }
}
