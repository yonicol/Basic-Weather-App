import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../city';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-by-city',
  templateUrl: './by-city.component.html',
  styleUrls: ['./by-city.component.css']
})
export class ByCityComponent implements OnInit {

  citys:City[] = [];
  bycity:City;
  showcity:boolean = false;
  constructor(private router:Router, private data:HandleDataService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata() :void{
    this.citys = this.data.getAll();
  }
  showbycity(byname):void{
    this.showcity = true;
    for(let i=0;i<this.citys.length;i++){
      if(this.citys[i].name==byname){
        this.bycity = this.citys[i];
        break;
      }
    }
  }
}
