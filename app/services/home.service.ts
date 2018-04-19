import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
returnCities(): Array<any> {
  const cities = ['Newcastle', 'Manchester', 'London', 'Liverpool',];
  return cities;
}
  constructor() { }

}
