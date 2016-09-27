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
