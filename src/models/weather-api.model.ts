export class WeatherModel {
  public id: number;
  public main: string;
  public description: string;
  public icon: string;
}

export class WeatherApiModel {
  public weather: [WeatherModel];
}
