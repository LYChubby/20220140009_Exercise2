const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const progress = document.querySelector(".progress");
const currentTimeElement = document.getElementById("current-time");
const durationElement = document.getElementById("duration");

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = "<span>&#10074;&#10074;</span>";
  } else {
    audio.pause();
    playPauseButton.innerHTML = "<span>&#9658;</span>";
  }
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  updateTimeDisplay(currentTimeElement, currentTime);
  updateTimeDisplay(durationElement, duration);
});

function updateTimeDisplay(element, time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  element.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

audio.addEventListener("loadedmetadata", () => {
  updateTimeDisplay(durationElement, audio.duration);
});
