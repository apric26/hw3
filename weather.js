let updateWidget = function(data) {
  console.log("Got weather data: ", data)

  let weatherImage = data.weather[0]
  let weather_url = "http://openweathermap.org/img/w/" + weatherImage.icon + ".png"
  console.log ("The image url is:", weather_url)
  $("img").attr("src", weather_url)

  $(".card-title").html(data.name)

  $(".card-text").html("It is " + Math.round(data.main.temp) + " degrees outside")


  // YOUR CODE GOES HERE

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

}

let getWeather = function(info) {
  console.log(info)
  window.weatherInfo = info
  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let apiKey = '4d849d7b15532adcfd0e3b519de30a69'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'


  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);

}
let handlePosition = function(event) {
   console.log ("Starting handlePosition...")
   event.preventDefault();
   navigator.geolocation.getCurrentPosition(getWeather);
   console.log ("Ending handlePosition...")

}


$("#get_forecast").on("click", handlePosition)
  console.log ("It works!")




////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
