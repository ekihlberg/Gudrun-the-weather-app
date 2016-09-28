/*   the following code is adapted from the documentation of Open Weather API  http://openweathermap.org/current */
// 34e39a1c37183c8db7f68ab6450c1df2
var latitude = 57.712584;
var longitude = 11.986084;

function ParseWeatherAPI(){
	var weatherData = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=34e39a1c37183c8db7f68ab6450c1df2&callback=parseWeather&units=metric';
	JSONPRequest(weatherData);
};



//tar emot datan från API
function parseWeather(data){
		console.log(data);
		var Temperature = Math.round(data.main.temp);
		console.log("The Current Temperature:"+Temperature);
		document.getElementById('temp').innerHTML = Temperature+"&deg;";
		// var Rain = data.rain.3h;
		// console.log("The Current Rain Amount:"+Rain);


	};

/* The following 5 lines of code was adapted from the lecture material of lecture 7 in Gustav Mäkinen's course Client Programming with Javascript - TKJK15  */
function JSONPRequest(url) {
     var s = document.createElement('script');
     s.setAttribute('src', url);
     document.getElementsByTagName('head')[0].appendChild(s);
};

var audio = document.getElementById('Audio');
    var btn = document.getElementById('audio_button');
      function checkSound(){
        if (audio.paused && !audio.ended && audio.currentTime > 0 ){
              audio.play();
              btn.src ="img/mute.png";
        }
        else {
              audio.pause();
              btn.src ="img/audio.png";
        }

            }
audio.addEventListener("ended", function(){
                audio.currentTime = 0;
                console.log("ended");
                audio.play();
                 });

document.addEventListener('DOMContentLoaded',function(){
		ParseWeatherAPI();
	}
	);
