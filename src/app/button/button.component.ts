import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../end-pints/api-service.service'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private apiservice: MyApiService) { }
  dateObj: any
  sendDate() {
    this.dateObj = new Date();
    this.apiservice.sendDate(this.dateObj);
  }
  ngOnInit() {
  }

}
