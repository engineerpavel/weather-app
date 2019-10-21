import {Injectable} from '@angular/core';
import {CitiesEnum} from '../models/cities.enum';
import {Observable} from 'rxjs';
import {WeatherApiModel} from '../models/weather-api.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class WeatherRepository {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getWeatherData(city: CitiesEnum, forecast?: boolean): Observable<WeatherApiModel> {
    return this.http.get<WeatherApiModel>(`${environment.apiURL}?q=${city}&appid=${environment.apiKey}`);
  }
}
