import { getDayOfWeek, getDate, getTime } from "./helper";

const DOM = (() => {
  const updateData = function (data, units) {
    const currentWeatherData = data[0];
    const forecastData = data[1];

    let unit = "";
    units == "metric" ? (unit = "C") : (unit = "F");

    editCurrentWeatherData(currentWeatherData, unit);
    editForecast(forecastData.daily, unit);
    console.log(forecastData.daily);
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
    currentTempElement.textContent = `${data.main.temp} °${unit}`;

    const cloudIcon = document.querySelector(".currentCloud");
    cloudIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  };

  const editForecast = function (data, unit) {
    const forecastContainer = document.querySelector(".forecast-container");
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
      forecastLowTemp.textContent = `${forecast.temp.min} °${unit}`;

      const forecastHighTemp = document.createElement("p");
      forecastHighTemp.classList.add("forecast-high-temperature");
      forecastHighTemp.textContent = `${forecast.temp.max} °${unit}`;
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
