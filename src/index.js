import Weather from "./weather.js";

const weatherAPI = new Weather("a722fdf37dc5dcbe9f831dd8326dd09a");
//For temperature in Fahrenheit use units=imperial
//For temperature in Celsius use units=metric
weatherAPI.getWeather("Marikina", "metric");
