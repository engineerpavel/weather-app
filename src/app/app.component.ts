import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {CitiesEnum} from '../models/cities.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
    private weatherService: WeatherService;

    constructor(weatherService: WeatherService) {
      this.weatherService = weatherService;
    }

    public ngOnInit(): void {
      this.weatherService.getWeatherData(CitiesEnum.LISBON).subscribe((weather) => {
        console.log('погода', weather);
      });
    }
}
