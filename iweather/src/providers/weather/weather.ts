import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

 private apiKey= '5045034cd115291b';
 private url;
 

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q/CA/San_Francisco.json';
  }


  getWeather(city,country){

    return this.http.get(this.url+'/'+country+'/'+city+'.json')
    .map(res => res.json());
 
  }

}
