window.onload = function() {
    var audio = document.getElementById('backgroundMusic');
    var initialVolume = 0.5;  
    var maxVolume = 1.0;      
    var fadeTime = 5000;     
    var fadeStep = 0.1;      
    var startTime = 20;       

    audio.volume = initialVolume;
    audio.currentTime = startTime; 
    audio.play();

    var fadeAudio = setInterval(function () {
        if (audio.volume < maxVolume - fadeStep) {
            audio.volume += fadeStep;
        } else {
            audio.volume = maxVolume;
            clearInterval(fadeAudio);
        }
    }, fadeTime * fadeStep / maxVolume);
};