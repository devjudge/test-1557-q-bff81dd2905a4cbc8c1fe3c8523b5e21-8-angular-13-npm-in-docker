import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterData: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
}
