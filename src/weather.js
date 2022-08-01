class Weather {
  constructor(apikey) {
    this.apikey = apikey;
  }

  buildURL(city, units) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apikey}&units=${units}`;
  }

  async getWeather(city, units) {
    const response = await fetch(this.buildURL(city, units));
    const weatherData = await response.json();
    const forecast = await this.getForecast(this.getCoord(weatherData), units);
    return [weatherData, forecast];
  }

  getCoord(data) {
    return data.coord;
  }

  async getForecast(coords, units) {
    const { lat, lon } = coords;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${this.apikey}`
    );
    const forecastData = await response.json();
    return forecastData;
  }
}

export default Weather;
