import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
//string Greeting
//Greeting  = 'Hello there...';

@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  greeting = 'Hello there...';
  cities = [];
  amount = 20;
  date = new Date();
  name: string ;
  constructor(private homeService: HomeService) { }


  ngOnInit() {
    this.getCities();
  }
  getCities() {
    this.cities = this.homeService.returnCities();
  }
}
