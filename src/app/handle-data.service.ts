import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  citys:City[] = [];
  citystoget:string[] = ["Afula","Haifa","Ashkelon","Acre","Ashdod","Beersheba","Holon","Jerusalem",];
  apiurl:string; //`https://api.openweathermap.org/data/2.5/weather?q=cityname&appid=b6907d289e10d714a6e88b30761fae22`
  constructor(private apiconnect:HttpClient) { }
  getAll() :City[]{
    this.citys = [];
    for(let i=0;i<this.citystoget.length;i++){
      this.apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${this.citystoget[i]}&appid=202fe50848bab896cfd6caeb7d39834e&units=metric`
      let city = this.apiconnect.get(this.apiurl);
      city.subscribe(ele => this.citys.push(new City(ele.name, ele.sys.country, ele.weather[0].description, ele.main.temp, ele.weather[0].icon)))
    }
    return this.citys;
  }
}
