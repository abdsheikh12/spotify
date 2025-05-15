let pause = document.getElementById("pause");
let gif = document.getElementById("gif");
let prog = document.getElementById("prog");
let next = document.getElementById("next");
let audio = new Audio("songs/1.mp3");
let songIndex = 0;

let songlist = Array.from(document.getElementsByClassName("list"));
let songs = [
  { songname: "WAVY (OFFICIAL VIDEO) KARAN AUJLA | LATEST PUNJABI SONGS 2024", file: "1.mp3", covers: "way.jpg" },
  { songname: "Afusic - Pal Pal (Official Music Video) Prod", file: "2.mp3", covers: "pal.png" },
  { songname: "Haseen by Talwinder", file: "3.mp3", covers: "h.jpg" },
  { songname: "Tension Song - Diljit dosangh", file: "4.mp3", covers: "t.jpg" },
  { songname: "Jhol", file: "5.mp3", covers: "j.jpg" },
  { songname: "Guru Randhawa - QATAL - (Official Video)", file: "6.mp3", covers: "q.jpg" },

];

// Song list update
songlist.forEach((e, i) => {
  e.getElementsByClassName("cover")[0].src = songs[i].covers;
  e.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

// Main play/pause button
pause.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    pause.src = "play.svg";
    gif.style.opacity = "1";
  } else {
    audio.pause();
    pause.src = "pause.svg";
    gif.style.opacity = "0";
  }
});

// Progress bar update
audio.addEventListener("timeupdate", () => {
  let progress = parseInt((audio.currentTime / audio.duration) * 100);
  prog.value = progress;
});

// Seek in song
prog.addEventListener("change", () => {
  audio.currentTime = (prog.value / 100) * audio.duration;
});

// Make all play buttons default
const makeAllPlays = () => {
  let icons = document.getElementsByClassName("songItemPlay");
  Array.from(icons).forEach((el) => {
    el.classList.remove("fa-pause");
    el.classList.add("fa-play");
  });
};

// Play individual song
let songIcons = document.getElementsByClassName("songItemPlay");
Array.from(songIcons).forEach((element, i) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    songIndex = i;
    audio.src = songs[i].file;
    audio.currentTime = 0;
    audio.play();
    pause.src = "play.svg";
    gif.style.opacity = "1";
  });
});


// Next button
next.addEventListener("click" , function(){
 songIndex=(songIndex+1)%songs.length;
 audio.src=songs[songIndex].file;
 audio.play()
 audio.currentTime=0;
  pause.src = "play.svg";
    gif.style.opacity = "1";
})
document.getElementById("pre").addEventListener("click" , function(){
   songIndex=(songIndex-1 +songs.length)%songs.length;
 audio.src=songs[songIndex].file;
 audio.play()
 audio.currentTime=0;
  pause.src = "play.svg";
    gif.style.opacity = "1";
})
