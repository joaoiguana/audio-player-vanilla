const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progressive');
const progressContainer = document.querySelector('.progressive-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song titles
const songs = ['都会', 'Quadropuss Island', 'Jazz Club After Hours']

// Keep track of songs
let songIndex = 0

// Initially load song info DOM
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
  title.innerText = song
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.jpg`
}
