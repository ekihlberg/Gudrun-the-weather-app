/*   the following code is adapted from the documentation of Open Weather   */
function ParseWeaterAPI(){
	var weather = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=c26821b846657e49aa006f7729139197&callback=parseWeather';
	JSONPRequest(weather);
}
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

  /* The following 5 lines of code was adapted from the lecture material of lecture 7 in Gustav Mäkinen's course Client Programming with Javascript - TKJK15  */
function JSONPRequest(url) {
     var s = document.createElement('script');
     s.setAttribute('src', url);
     document.getElementsByTagName('head')[0].appendChild(s);
}
