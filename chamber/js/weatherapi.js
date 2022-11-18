// select HTML elements in the document
const currentTemp = document.querySelector('#weather-temp');
const currentWindSpeed = document.querySelector('#weather-windspeedresult');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://lcampos9.github.io/2wdd230/prueba.json';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.weather.temp.toFixed(0)}</strong>`;
    currentWindSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }
