const container = document.querySelector(".container");
const search = document.querySelector(".search_box button");
const weatherBox = document.querySelector(".weather_details");
search.addEventListener("click", () => {
  const APIKey = "42030dffa2fbbff1eb3d36be44f7032b";
  const city = document.querySelector(".search_box input").value;
  if (city == "") return;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const image = document.querySelector(".weather_box img");
      const temperature = document.querySelector(".weather_box .temperature");
      const description = document.querySelector(".weather_box .description");
      const humidity = document.querySelector(
        ".weather_details .humidity span"
      );
      const wind = document.querySelector(".weather_details .wind span");
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.jpeg";
          break;

        case "Rain":
          image.src = "images/rain.jpeg";
          break;
        case "Snow":
          image.src = "images/snow.jpeg";
          break;
        case "Cloud":
          image.src = "images/cloud.jpeg";
          break;
        case "Mist":
          image.src = "images/mist.jpeg";
          break;
        case "Haze":
          image.src = "images/mist.jpeg";
          break;
        default:
          image.src =
            "images/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.webp";
      }
      temperature.innerHTML = `${parseInt(json.main.temp)} <span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
});
