let weather = {
  apiKey: "b2ced3280ffc42c384b6da4df295b239",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((responsive) => responsive.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){
     const { name } = data;
     const { icon, description } = data.weather[0];
     const { temp, humidity } = data.main;
     const { speed } = data.wind;
     console.log(name,icon,description,temp,humidity, speed);
     document.querySelector('.city').innerHTML = "Weather in " + name;
     document.querySelector(".icon").src =
     "https://openweathermap.org/img/wn/" + icon + ".png";
     document.querySelector('.temp').innerHTML = Math.round(temp) + "°C";
     document.querySelector('.description').innerHTML = description;
     document.querySelector('.humidity').innerHTML = "Humidity: " + humidity + "%";
     document.querySelector('.speed').innerHTML = "Wind speed:" + speed + "km/h";
  },
  search: function(data){
     this.fetchWeather(document.querySelector('.search-type').value);
  }
};
document.querySelector(".search button").addEventListener('click', function () {
     weather.search();
})

document.querySelector('.search-type').addEventListener('keyup', function (e) {
    if(e.key == 'Enter'){
      weather.search();
    }   
})