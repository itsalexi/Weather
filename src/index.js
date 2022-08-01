import Weather from "./weather.js";
import DOM from "./dom.js";

const weatherAPI = new Weather("a722fdf37dc5dcbe9f831dd8326dd09a");
//For temperature in Fahrenheit use units=imperial
//For temperature in Celsius use units=metric
const weatherData = await weatherAPI.getWeather("Marikina", "metric");

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

DOM.updateData(weatherData, "metric");
