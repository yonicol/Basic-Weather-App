import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../city';
import { HandleDataService } from '../handle-data.service';



@Component({
  selector: 'app-all-citys',
  templateUrl: './all-citys.component.html',
  styleUrls: ['./all-citys.component.css']
})
export class AllCitysComponent implements OnInit {
  citys:City[] = [];
  constructor(private router:Router, private data:HandleDataService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata() :void{
    this.citys = this.data.getAll();
  }
}
