window.onload = function() {
    const tracks = ["music/Swan Song.mp3", "music/Good Bones.mp3", "music/Smart.mp3", "music/We got so much.mp3"];
    let currentTrackIndex = 0;
    const audio = document.getElementById('backgroundMusic');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');

    // 初始化音樂
    audio.src = tracks[currentTrackIndex];
    audio.currentTime = 20;

    // 音量淡入設定
    let initialVolume = 0.0;
    let maxVolume = 0.3;
    let fadeTime = 5000;
    let fadeStep = 0.1;
    audio.volume = initialVolume;

    var fadeAudio = setInterval(function () {
        if (audio.volume < maxVolume - fadeStep) {
            audio.volume += fadeStep;
        } else {
            audio.volume = maxVolume;
            clearInterval(fadeAudio);
        }
    }, fadeTime * fadeStep / maxVolume);

    function updatePlayPauseIcon() {
        if (audio.paused) {
            playIcon.style.display = '';
            pauseIcon.style.display = 'none';
        } else {
            playIcon.style.display = 'none';
            pauseIcon.style.display = '';
        }
    }

    // 播放和暫停
    function playPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayPauseIcon();
    }

    // 下一首歌曲
    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        audio.src = tracks[currentTrackIndex];
        audio.play();
        updatePlayPauseIcon();
    }

    // 上一首歌曲
    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        audio.src = tracks[currentTrackIndex];
        audio.play();
        updatePlayPauseIcon();
    }

    // 初始播放按鈕狀態
    updatePlayPauseIcon();

    // 事件監聽器設定
    document.getElementById('play-pause').addEventListener('click', playPause);
    document.getElementById('prev').addEventListener('click', prevTrack);
    document.getElementById('next').addEventListener('click', nextTrack);
    audio.addEventListener('ended', nextTrack);
};
