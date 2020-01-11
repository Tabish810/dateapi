import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  date;
  sendDate(date) {
    this.date = date;
    return this.date;
  }
  getDateTimeAPI() {
    return this.date;
  }
}
