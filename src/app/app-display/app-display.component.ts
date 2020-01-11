import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../end-pints/api-service.service'
@Component({
  selector: 'app-app-display',
  templateUrl: './app-display.component.html',
  styleUrls: ['./app-display.component.css']
})
export class AppDisplayComponent implements OnInit {

  constructor(private api: MyApiService) { }
  year;
  date;
  currentDate;
  getDetails(){
    this.date = this.api.getDate()
    this.currentDate = this.date.getDate();
    this.year = this.date.getFullYear();
  }
  ngOnInit() {
    this.getDetails();
  }

}
