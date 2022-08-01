import { getDayOfWeek, getDate, getTime } from "./helper";
import { callWeather } from "./index";
const DOM = (() => {
  const locationForm = document.querySelector(".locationForm");
  const changeUnit = document.querySelector(".changeUnits");
  let currentData;
  let currentUnit = "metric";

  locationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    callWeather(getLocation(), currentUnit);
  });

  changeUnit.addEventListener("click", () => updateUnit());

  const updateUnit = function () {
    if (currentUnit == "metric") {
      currentUnit = "imperial";
      changeUnit.textContent = "Display °C";
    } else if (currentUnit == "imperial") {
      currentUnit = "metric";
      changeUnit.textContent = "Display °F";
    }
    callWeather(currentData[0].name, currentUnit);
  };

  const getLocation = function () {
    return document.getElementById("location").value;
  };

  const updateData = function (data, units) {
    const currentWeatherData = data[0];
    const forecastData = data[1];
    currentData = data;

    let unit = "";
    units == "metric" ? (unit = "C") : (unit = "F");

    editCurrentWeatherData(currentWeatherData, unit);
    editForecast(forecastData.daily, unit);
  };

  const editCurrentWeatherData = function (data, unit) {
    const cloudElement = document.querySelector(".cloud-type");
    cloudElement.textContent = data.weather[0].description.toProperCase();

    const cityElement = document.querySelector(".city-name");
    cityElement.textContent = data.name;

    const todayDateElement = document.querySelector(".today-date");
    todayDateElement.textContent = getDate(data.dt);

    const currentTimeElement = document.querySelector(".current-time");
    currentTimeElement.textContent = getTime(data.dt);

    const currentTempElement = document.querySelector(".current-temperature");
    currentTempElement.textContent = `${Math.round(data.main.temp)} °${unit}`;

    const cloudIcon = document.querySelector(".currentCloud");
    cloudIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  };

  const editForecast = function (data, unit) {
    const forecastContainer = document.querySelector(".forecast-container");
    forecastContainer.innerHTML = "";
    for (let i = 0; i < data.length - 1; i++) {
      const forecast = data[i];
      const card = document.createElement("div");
      card.classList.add("forecast-card");
      const forecastDayElement = document.createElement("p");
      forecastDayElement.classList.add("forecast-day");
      forecastDayElement.textContent = getDayOfWeek(forecast.dt);
      const forecastTempDiv = document.createElement("div");
      forecastTempDiv.classList.add("forecast-temperatures");
      const forecastLowTemp = document.createElement("p");
      forecastLowTemp.classList.add("forecast-low-temperature");
      forecastLowTemp.textContent = `${Math.round(forecast.temp.min)} °${unit}`;

      const forecastHighTemp = document.createElement("p");
      forecastHighTemp.classList.add("forecast-high-temperature");
      forecastHighTemp.textContent = `${Math.round(
        forecast.temp.max
      )} °${unit}`;
      const forecastCloud = document.createElement("img");
      forecastCloud.src = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

      card.appendChild(forecastDayElement);
      card.appendChild(forecastTempDiv);
      card.appendChild(forecastCloud);
      forecastTempDiv.appendChild(forecastHighTemp);
      forecastTempDiv.appendChild(forecastLowTemp);

      forecastContainer.append(card);
    }
  };
  return {
    updateData,
  };
})();

export default DOM;
