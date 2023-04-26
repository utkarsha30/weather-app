import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  constructor(private weatherService: WeatherService) {}
  cityName: string = 'mumbai';
  weatherData?: WeatherData;
  celciusTemperature?: number;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  convertToCelcius(temp: number): number {
    return (this.celciusTemperature = temp - 273.15);
  }
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
