import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherApiModel} from '../models/weather-api.model';
import {CitiesEnum} from '../models/cities.enum';
import {WeatherRepository} from '../repositories/weather.repository';

@Injectable()
export class WeatherService {

  private repo: WeatherRepository;

  constructor(repo: WeatherRepository) {
    this.repo = repo;
  }

  public getWeatherData(city: CitiesEnum, forecast?: boolean): Observable<WeatherApiModel> {
      return this.repo.getWeatherData(city, forecast);
  }
}
