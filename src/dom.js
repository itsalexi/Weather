import { getDayOfWeek } from "./helper";

const DOM = (() => {
  const updateData = function (data) {
    const currentWeatherData = data[0];
    const forecastData = data[1];

    editCurrentWeatherData(currentWeatherData);
    console.log(currentWeatherData);
  };

  const editCurrentWeatherData = function (data) {
    const cloudElement = document.querySelector(".cloud-type");
    cloudElement.textContent = data.weather[0].description.toProperCase();

    const cityElement = document.querySelector(".city-name");
    cityElement.textContent = data.name;
  };
  return {
    updateData,
  };
})();

export default DOM;
