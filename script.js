const media = document.getElementById("media");
const play = document.getElementById("play");
const stopV = document.getElementById("stop");
const progress = document.getElementById("rangeBar");
const time = document.getElementById("time");

function togglingVideo() {
  if (media.paused) {
    media.play();
    play.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    media.pause();
    play.innerHTML = '<i class="fa fa-play"></i>';
  }
}

function mediaUpdate() {
  progress.value = (media.currentTime / media.duration) * 100;
  let min = Math.floor(media.currentTime / 60);
  if (min < 10) {
    min = "0" + String(min);
  }

  let sec = Math.floor(media.currentTime % 60);
  if (sec < 10) {
    sec = "0" + String(sec);
  } else {
    sec = String(sec);
  }
  time.innerHTML = `${min}::${sec}`;
}

function updateRange() {
  media.currentTime = (progress.value * media.duration) / 100;
}

function stopVideo() {
  media.currentTime = 0;
  media.pause();
}

media.addEventListener("click", togglingVideo);
media.addEventListener("timeupdate", mediaUpdate);

play.addEventListener("click", togglingVideo);

stopV.addEventListener("click", stopVideo);

progress.addEventListener("change", updateRange);
