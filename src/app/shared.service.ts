import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json');
  }
}
