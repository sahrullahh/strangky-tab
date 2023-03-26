import { weather } from "../api/index.js";
import { getCurrentLocation } from "../api/index.js";
import { geoLocation } from "../utils/geolocation.js";

class Weather {
  weatherInfo = document.querySelector(".weather-info");

  constructor() {
    this._init();
  }

  async _init() {
    const geo = await geoLocation();

    const locate = await getCurrentLocation(
      geo.coords.latitude,
      geo.coords.longitude
    );

    const thisLocality = !locate.locality ? "Bondowoso" : locate.locality;

    const data = await weather(thisLocality);

    const element = `
      <div class="body-weather" title="${data.weather[0].description}">
         <div class="icon">
         ${
           data.weather[0].main.toLowerCase() === "clouds"
             ? ' <i class="fas fa-clouds"></i>'
             : ' <i class="fas fa-cloud-rain"></i>'
         }
         </div>
         <div class="text-temperature">
         <p class="text">${data.main.temp}&deg;</p>
         <p class="location">${data.name}</p>
         </div>
      </div>
     
     `;

    this.weatherInfo.innerHTML = element;
  }
}

export default Weather;
