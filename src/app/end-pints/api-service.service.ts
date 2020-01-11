import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';
@Injectable()
export class MyApiService {

  constructor(private apiService : ApiService) {
   }
   getDate(){
     return this.apiService.getDateTimeAPI();
   }
   sendDate(date){
     return this.apiService.sendDate(date);
   }

}
