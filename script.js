const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-suuny",
    "Snow": "wi wi-day-snow",
    "mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
}

let api;

let apiKey = "d91050d9930abfbb14309574f150c000";

function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=Charenton&appid=d91050d9930abfbb14309574f150c000`;
    fetchData();
  }
  
function onSuccess(position) {
    const { latitude, longitude } = position.coords; 
    api = `https://api.openweathermap.org/data/2.5/weather?q=Charenton&appid=d91050d9930abfbb14309574f150c000`;
    fetchData();
}

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

function fetchData() {
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      .catch(() => {
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
      });
  }
    if (id == 800) {
        wIcon.src = "icons/clear.svg";
    } else if (id >= 200 && id <= 232) {
        wIcon.src = "icons/storm.svg";
    } else if (id >= 600 && id <= 622) {
        wIcon.src = "icons/snow.svg";
    } else if (id >= 701 && id <= 781) {
        wIcon.src = "icons/haze.svg";
    } else if (id >= 801 && id <= 804) {
        wIcon.src = "icons/cloud.svg";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
        wIcon.src = "icons/rain.svg";
    }function fetchData() {
  infoTxt.innerText = "Getting weather details...";
  infoTxt.classList.add("pending");
  
  fetch(api)
    .then((res) => res.json())
    .then((result) => weatherDetails(result))
    .catch(() => {
      infoTxt.innerText = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
    });
  }

    if (id == 800) {
      wIcon.src = "icons/clear.svg";
    } else if (id >= 200 && id <= 232) {
      wIcon.src = "icons/storm.svg";
    } else if (id >= 600 && id <= 622) {
      wIcon.src = "icons/snow.svg";
    } else if (id >= 701 && id <= 781) {
      wIcon.src = "icons/haze.svg";
    } else if (id >= 801 && id <= 804) {
      wIcon.src = "icons/cloud.svg";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      wIcon.src = "icons/rain.svg";
  }

async function main(){
  const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Charenton&appid=d91050d9930abfbb14309574f150c000`)
   .then(resultat => resultat.json)
   .then(json => json)

  console.log(meteo)

  displayWeatherInfos(meteo)
}

function displayWeatherInfos(data){
    const name = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].main;
    const description = data.weather[0].description;

    document.querySelector('#city').textContent = name;
    document.querySelector('#temperature').textContent = Math.round(temperature);
    document.querySelector('#conditions').textContent = description;
    document.querySelector('i.wi').className = weatherIcons[conditions];

    document.body.className = conditions.tolowerCase();

}

main();