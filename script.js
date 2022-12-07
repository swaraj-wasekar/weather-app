const Http = new XMLHttpRequest();
const myAPIkey = "471c0ef4190df42fccfa2766592c6624";
let cityName = "Varanasi";

function fluc(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function setWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPIkey}&units=metric`;
  $.getJSON(url, function (data) {
    $(".city").text(`Weather in ${fluc(cityName)}`);
    $(".temp").text(`${data.main.temp}°C`);
    $(".description").text(fluc(data.weather[0].description));
    $("img").attr(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    $(".humidity").text(`Humidity : ${data.main.humidity}%`);
    $(".wind").text(`Wind speed : ${data.wind.speed}m/s`);
  });
}

function fun() {
  cityName = $(".search-bar")[0].value;
  setWeather();
}
