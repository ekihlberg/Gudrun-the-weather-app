// globala variabler
 var pos = {};

 pos = JSON.parse(skicka);
 console.log(pos.lng);
 debugger;

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

	// KARTAN -------------------

/* The following 4 lines code was adapted on a post at: https://developers.google.com/maps/documentation/javascript/tutorial Accessed: 2016-09-20 */
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: pos. , lng: 18.110103},
          disableDefaultUI: true,
          zoom: 13,
          /* The following 82 lines code was adapted on a post at: https://developers.google.com/maps/documentation/javascript/styling Accessed: 2016-09-20 */
          styles: [
            {elementType: 'geometry', stylers: [{color: '#000066'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#000'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#eeca06'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#eeca06'}]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#000066'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#eeca06'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#eeca06'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#bdbaba'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#eeca06'}]

            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
          });

      var image = 'img/mappin.png';
/* The following 30 lines code was adapted on a post at: https://developers.google.com/maps/documentation/javascript/examples/map-geolocation Accessed: 2016-09-27 */
      var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        icon: image
      });

        // Try HTML5 geolocation.
    // if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(function(position) {
    //         pos = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude
    //         };
		//
    //         marker.setPosition(pos);
		//
    //         map.setCenter(pos);
    //       }, function() {
    //         handleLocationError(true, marker, map.getCenter());
    //       });
    //     } else {
    //       // Browser doesn't support Geolocation
    //       handleLocationError(false, marker, map.getCenter());
    //     }
	};

      // function handleLocationError(browserHasGeolocation, marker, pos) {
      //   marker.setPosition(pos);
      //   marker.setContent(browserHasGeolocation ?
      //                         'Error: The Geolocation service failed.' :
      //                         'Error: Your browser doesn\'t support geolocation.');
			// 											};

document.getElementById('mapbutton').addEventListener('click',function(){

      document.getElementById("outfit_page").style.display = "none";
      document.getElementById("backicon").style.display = "block";

});

// KARTAN -------------------

/*   the following code is adapted from the documentation of Open Weather API  http://openweathermap.org/current */
// 34e39a1c37183c8db7f68ab6450c1df2   Weather key
// var latitude = 25.433333;
// var longitude = 57.7826;
var rain;
function ParseWeatherAPI(){
	var weatherData = 'http://api.openweathermap.org/data/2.5/weather?lat='+pos.lat+'&lon='+pos.lng+'&appid=34e39a1c37183c8db7f68ab6450c1df2&callback=parseWeather&units=metric';
	JSONPRequest(weatherData);
};

//tar emot datan från API
function parseWeather(data){
		console.log(data);
		var temperature = Math.round(data.main.temp);
		console.log("The Current Temperature:"+temperature);
		document.getElementById('temp').innerHTML = temperature+"&deg;";
		var wind = data.wind.speed;
		console.log("The Current wind speed is:"+wind);
		var raindata = data.rain;
		if (rainstring == undefined){
			console.log('HEJ');
			 rain = 0;
			 console.log(rain);
		}
		else {
			console.log(raindata);
			var rainstring = JSON.stringify(rain);
			console.log(rainstring);
			var hej = rainstring.slice(6, -1);
			console.log(rain);
		};
		var clouds = data.clouds.all
		console.log(clouds);

				//summer
			if (temperature >= 25 && rain < 1) {

				document.getElementById('outfit').src="img/s_sun.jpeg";
			}
			else if (temperature >= 20 && rain < 1){
				document.getElementById('outfit').src="img/s_sun_wind.jpeg";
			}
			else if (temperature >= 18 && rain > 1){
				document.getElementById('outfit').src="img/s_sun_rain.jpeg";
			}

			else if (temperature >= 15 && rain > 1){
				document.getElementById('outfit').src="img/s_sun_wind_rain.jpeg";
			}

			 else if (temperature >= 20 && rain < 1){
				document.getElementById('outfit').src="img/s_sun_cloud.jpeg";
			}

			else if (temperature >= 20 && rain < 1){
				document.getElementById('outfit').src="img/s_cloud.jpeg";
			}

			 else if (temperature >= 20 && rain > 1){
				document.getElementById('outfit').src="img/s_cloud_wind.jpeg";
			}

			else if (temperature >= 20 && rain < 1){
				document.getElementById('outfit').src="img/s_cloud_rain.jpeg";
			}
			 else if (temperature >= 13 && rain > 1){
				document.getElementById('outfit').src="img/s_cloud_wind_rain.jpeg";
			}



			//höst
			else if (temperature >= 10 && rain < 1){
				document.getElementById('outfit').src="img/h_sun.jpeg";
			}

			else if (temperature >= 8 && rain < 1){
				document.getElementById('outfit').src="img/h_sun_wind.jpeg";
			}

			else if (temperature >= 5 && rain > 1){
				document.getElementById('outfit').src="img/h_sun_rain.jpeg";
			}

			else if (temperature >= 5 && rain > 1){
				document.getElementById('outfit').src="img/h_sun_wind_rain.jpeg";
			}

			else if (temperature >= 8 && rain < 1){
				document.getElementById('outfit').src="img/h_sun_cloud.jpeg";
			}

			else if (temperature >= 5 && rain < 1){
				document.getElementById('outfit').src="img/h_cloud.jpeg";
			}

			else if (temperature >= 3 && rain < 1){
				document.getElementById('outfit').src="img/h_cloud_wind.jpeg";
			}

			else if (temperature >= 2 && rain > 1){
				document.getElementById('outfit').src="img/h_cloud_rain.jpeg";
			}

			else if (temperature >= 0 && rain > 1){
				document.getElementById('outfit').src="img/h_cloud_wind_rain.jpeg";
			}

			//winter
			else if (temperature >= 0 && rain < 1){
				document.getElementById('outfit').src="img/v_sun.jpeg";
			}

			else if (temperature >= 0 && rain < 1){
				document.getElementById('outfit').src="img/v_sun_wind.jpeg";
			}

			else if (temperature >= -5 && rain > 1){
				document.getElementById('outfit').src="img/v_sun_rain.jpeg";
			}


			else if (temperature >= -7 && rain > 1){
				document.getElementById('outfit').src="img/v_sun_wind_rain.jpeg";
			}


			else if (temperature >= -2 && rain < 1){
				document.getElementById('outfit').src="img/v_sun_cloud.jpeg";
			}

			else if (temperature >= -5 && rain < 1){
				document.getElementById('outfit').src="img/v_cloud.jpeg";
			}

			else if (temperature >= -10 && rain < 1){
				document.getElementById('outfit').src="img/v_cloud_wind.jpeg";
			}

			else if (temperature >= -5 && rain > 1){
				document.getElementById('outfit').src="img/v_cloud_rain.jpeg";
			}

			else if (temperature >= -15 && rain > 1){
				document.getElementById('outfit').src="img/v_cloud_wind_rain.jpeg";
			}

			//spring

			else if (temperature >= 10 && rain < 1){
				document.getElementById('outfit').src="img/va_sun.jpeg";
			}

			else if (temperature >= 8 && rain < 1){
				document.getElementById('outfit').src="img/va_sun_wind.jpeg";
			}

			else if (temperature >= 7 && rain > 1){
				document.getElementById('outfit').src="img/va_sun_rain.jpeg";
			}

			else if (temperature >= 4 && rain > 1){
				document.getElementById('outfit').src="img/va_sun_wind_rain.jpeg";
			}

			else if (temperature >= 8 && rain < 1){
				document.getElementById('outfit').src="img/va_sun_cloud.jpeg";
			}

			else if(temperature >= 5 && rain < 1){
				document.getElementById('outfit').src="img/va_cloud.jpeg";
			}

			else if(temperature >= 3 && rain < 1){
				document.getElementById('outfit').src="img/va_cloud_wind.jpeg";
			}

			else if(temperature >= 5 && rain > 1){
				document.getElementById('outfit').src="img/va_cloud_rain.jpeg";
			}
			else{
				document.getElementById('outfit').src="img/va_cloud_wind_rain.jpeg";
			};




	};
