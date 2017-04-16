var API_KEY = "a474d3e2a1801d4f71a64de9297a8088";

$(function(){
  
  var loc;
  
  $.getJSON('https://ipinfo.io', function(d){
  console.log("assigning the data...")
    loc=d.loc.split(",");
    console.log(loc)
   $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' 
             + loc[0] + '&lon=' + loc[1] +'&appid=' + API_KEY, function(wd){
     console.log("got the data ,",wd);
     var currentLocation = wd.name;
     var currentWeather = wd.weather[0].description;
     var currentTemp = wd.main.temp;
     var high = wd.main.temp_max;
     var low = wd.main.temp_min;
     var icon = wd.weather[0].icon;
 
     
     $('#currentLocation').html(currentLocation);
     $('#currentTemp').html(currentTemp);
     $('#currentWeather').html(currentWeather);
     $('#high-low').html(high + "/" + low);
     var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
         $('#currentTemp').prepend('<img src="' + iconSrc + '">');
     
     
     })
    //call to the weather
  })
})
// get latitude and longitude