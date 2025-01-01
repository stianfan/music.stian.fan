'use strict';


/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./music/planets.png",
    posterUrl: "./music/planets.png",
    title: "Planets",
    album: "DnB",
    year: 2024,
    artist: "",
    musicPath: "./music/planets.mp3",
  },
  {
    backgroundImage: "./music/gonnadu.png",
    posterUrl: "./music/gonnadu.png",
    title: "Gonna Du",
    album: "House",
    year: 2024,
    artist: "",
    musicPath: "./music/gonnadu.mp3",
  },
  {
    backgroundImage: "./music/youdonttwo.png",
    posterUrl: "./music/youdonttwo.png",
    title: "You Don't",
    album: "House",
    year: 2024,
    artist: "",
    musicPath: "./music/youdonttwo.mp3",
  },
  {
    backgroundImage: "./music/otherspiano.png",
    posterUrl: "./music/otherspiano.png",
    title: "Others",
    album: "EDM",
    year: 2023,
    artist: "",
    musicPath: "./music/otherspiano.mp3",
  },
  {
    backgroundImage: "./music/90svibes.png",
    posterUrl: "./music/90svibes.png",
    title: "Vibes",
    album: "90s",
    year: 2023,
    artist: "",
    musicPath: "./music/90svibes.mp3",
  },
  {
    backgroundImage: "./music/backtothebusy.png",
    posterUrl: "./music/backtothebusy.png",
    title: "Back To The Busy",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/backtothebusy.mp3",
  },
  {
    backgroundImage: "./music/concentrate.png",
    posterUrl: "./music/concentrate.png",
    title: "Concentrate",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/concentrate.mp3",
  },
  {
    backgroundImage: "./music/concretebounce.png",
    posterUrl: "./music/concretebounce.png",
    title: "Concretebounce",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/concretebounce.mp3",
  },
  {
    backgroundImage: "./music/engineroom.png",
    posterUrl: "./music/engineroom.png",
    title: "Engine Room",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/engineroom.mp3",
  },
  {
    backgroundImage: "./music/findyou.png",
    posterUrl: "./music/findyou.png",
    title: "Find You",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/findyou.mp3",
  },
  {
    backgroundImage: "./music/fixtrek.png",
    posterUrl: "./music/fixtrek.png",
    title: "Fix Trek",
    album: "House",
    year: 2023,
    artist: "",
    musicPath: "./music/fixtrek.mp3",
  },
  {
    backgroundImage: "./music/hipetihop.png",
    posterUrl: "./music/hipetihop.png",
    title: "Hipetihop",
    album: "Hip Hop",
    year: 2023,
    artist: "",
    musicPath: "./music/hipetihop.mp3",
  },
  {
    backgroundImage: "./music/internalimperfections.png",
    posterUrl: "./music/internalimperfections.png",
    title: "Internal Imperfections",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/internalimperfections.mp3",
  },
  {
    backgroundImage: "./music/itstime.png",
    posterUrl: "./music/itstime.png",
    title: "I'ts Time",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/itstime.mp3",
  },
  {
    backgroundImage: "./music/justwalk.png",
    posterUrl: "./music/justwalk.png",
    title: "Just Walk",
    album: "Hip Hop",
    year: 2023,
    artist: "",
    musicPath: "./music/justwalk.mp3",
  },
  {
    backgroundImage: "./music/kindamaybe.png",
    posterUrl: "./music/kindamaybe.png",
    title: "Kinda Maybe",
    album: "House",
    year: 2023,
    artist: "",
    musicPath: "./music/kindamaybe.mp3",
  },
  {
    backgroundImage: "./music/likethis.png",
    posterUrl: "./music/likethis.png",
    title: "Like This",
    album: "House",
    year: 2023,
    artist: "",
    musicPath: "./music/likethis.mp3",
  },
  {
    backgroundImage: "./music/lofirythm.png",
    posterUrl: "./music/lofirythm.png",
    title: "Lofirythm",
    album: "Lofi",
    year: 2023,
    artist: "",
    musicPath: "./music/lofirythm.mp3",
  },
  {
    backgroundImage: "./music/makeyoufeel.png",
    posterUrl: "./music/makeyoufeel.png",
    title: "Make You Feel",
    album: "Pop",
    year: 2023,
    artist: "",
    musicPath: "./music/makeyoufeel.mp3",
  },
  {
    backgroundImage: "./music/newday.png",
    posterUrl: "./music/newday.png",
    title: "New Day",
    album: "House",
    year: 2023,
    artist: "",
    musicPath: "./music/newday.mp3",
  },
  {
    backgroundImage: "./music/notmuch.png",
    posterUrl: "./music/notmuch.png",
    title: "Not Much",
    album: "Atmos",
    year: 2023,
    artist: "",
    musicPath: "./music/notmuch.mp3",
  },
  {
    backgroundImage: "./music/quantum.png",
    posterUrl: "./music/quantum.png",
    title: "Quantum",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/quantum.mp3",
  },
  {
    backgroundImage: "./music/reapersonme.png",
    posterUrl: "./music/reapersonme.png",
    title: "Reapers on Me",
    album: "Hip Hop",
    year: 2023,
    artist: "",
    musicPath: "./music/reapersonme.mp3",
  },
  {
    backgroundImage: "./music/velocity.png",
    posterUrl: "./music/velocity.png",
    title: "Velocity",
    album: "DnB",
    year: 2023,
    artist: "",
    musicPath: "./music/velocity.mp3",
  },
  {
    backgroundImage: "./music/whatdoiknow.png",
    posterUrl: "./music/whatdoiknow.png",
    title: "What Do I Know",
    album: "House",
    year: 2023,
    artist: "",
    musicPath: "./music/whatdoiknow.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * Get the dominant/average color from an image
 * @param {HTMLImageElement} imgElement - The image element to analyze
 * @returns {Promise<{r: number, g: number, b: number}>}
 */
const getAverageColor = async (imgElement) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    
    // Wait for image to load
    if (!imgElement.complete) {
      imgElement.onload = analyzeImage;
    } else {
      analyzeImage();
    }

    function analyzeImage() {
      // Set canvas size to reasonable sampling size
      canvas.width = 50;  // We don't need full resolution for color analysis
      canvas.height = 50;
      
      // Draw image to canvas
      context.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
      
      // Get image data
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
      
      let r = 0, g = 0, b = 0;
      const pixelCount = imageData.length / 4;  // Each pixel has 4 values (r,g,b,a)
      
      // Sum all values
      for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
      }
      
      // Get average
      r = Math.round(r / pixelCount);
      g = Math.round(g / pixelCount);
      b = Math.round(b / pixelCount);
      
      resolve({ r, g, b });
    }
  });
};

/**
 * Update the theme color based on the current album art
 */
const updateThemeColor = async () => {
  const playerBanner = document.querySelector("[data-player-banner]");
  const color = await getAverageColor(playerBanner);
  
  const { h, s, l } = rgbToHsl(color.r, color.g, color.b);
  
  // Add minimum bounds using Math.max()
  const adjustedS = Math.min(100, Math.max(50, s * 1.5));  // Minimum 40% saturation
  const adjustedL = Math.min(73, Math.max(42, l * 1.5));   // Minimum 35% lightness
  
  document.documentElement.style.setProperty(
    '--light-sky-blue',
    `hsl(${h}, ${adjustedS}%, ${adjustedL}%)`
  );
  
  // Update variants with the same minimum bounds
  document.documentElement.style.setProperty(
    '--light-sky-blue_a8',
    `hsla(${h}, ${adjustedS}%, ${adjustedL}%, 0.08)`
  );
  
  document.documentElement.style.setProperty(
    '--light-sky-blue_a12',
    `hsla(${h}, ${adjustedS}%, ${adjustedL}%, 0.12)`
  );
};

/**
 * Convert RGB to HSL
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {{h: number, s: number, l: number}}
 */
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}


/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
        <div class="music-item-title">${musicData[i].title}</div>
        <div class="music-item-details">
          <div class="music-item-album">${musicData[i].album}</div>
          <div class="music-item-year">${musicData[i].year}</div>
        </div>
      <div class="item-icon">
        <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="currentColor"><path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"></path></svg>
      </div>
    </button>
  </li>
  `;
}

/**
 * PLAYLIST AND INFO MODAL TOGGLES
 */

// Get all necessary DOM elements first
// Get all necessary DOM elements first
const infoModal = document.querySelector("[data-info-modal]");
const infoTogglers = document.querySelectorAll("[data-info-toggler]");
const overlay = document.querySelector("[data-overlay]");
const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");

// Function to handle overlay state
const updateOverlay = (show) => {
  if (show) {
    overlay.classList.add("active");
    document.body.classList.add("modalActive");
  } else {
    // On larger screens, remove overlay when modal is closed regardless of playlist state
    if (window.innerWidth >= 992) {
      if (!infoModal.classList.contains("active")) {
        overlay.classList.remove("active");
        document.body.classList.remove("modalActive");
      }
    } else {
      // On smaller screens, only remove overlay if both modal and playlist are closed
      if (!infoModal.classList.contains("active") && !playlistSideModal.classList.contains("active")) {
        overlay.classList.remove("active");
        document.body.classList.remove("modalActive");
      }
    }
  }
};

// Toggle info modal
const toggleInfo = function() {
  const isModalActive = infoModal.classList.contains("active");
  infoModal.classList.toggle("active");
  
  // Always update overlay based on modal state
  updateOverlay(!isModalActive);
};

// Toggle playlist
const togglePlaylist = function() {
  const isPlaylistActive = playlistSideModal.classList.contains("active");
  playlistSideModal.classList.toggle("active");
  
  // Only manage overlay for playlist on smaller screens
  if (window.innerWidth < 992) {
    updateOverlay(!isPlaylistActive);
  }
};

// Handle overlay click
const handleOverlayClick = function() {
  if (infoModal.classList.contains("active")) {
    toggleInfo();
    // Explicitly cleanup overlay on large screens
    if (window.innerWidth >= 992) {
      overlay.classList.remove("active");
      document.body.classList.remove("modalActive");
    }
  }
  if (playlistSideModal.classList.contains("active") && window.innerWidth < 992) {
    togglePlaylist();
  }
};

// Add click events for togglers
infoTogglers.forEach(item => {
  item.addEventListener("click", toggleInfo);
});

// Add click events for playlist togglers
playlistTogglers.forEach(item => {
  if (!item.matches('[data-overlay]')) {
    item.addEventListener("click", togglePlaylist);
  }
});

// Handle overlay clicks
overlay.addEventListener("click", handleOverlayClick);

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (window.innerWidth >= 992) {
      // On larger screens, only keep overlay if info modal is open
      if (!infoModal.classList.contains("active")) {
        overlay.classList.remove("active");
        document.body.classList.remove("modalActive");
      }
    } else if (infoModal.classList.contains("active") || playlistSideModal.classList.contains("active")) {
      // Re-add overlay on smaller screens if either modal is open
      overlay.classList.add("active");
      document.body.classList.add("modalActive");
    }
  }, 250);
});



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

// Add download functionality when clicking artist name
playerArtist.addEventListener("click", async function() {
  try {
    const currentSong = musicData[currentMusic];
    const response = await fetch(currentSong.musicPath);
    const blob = await response.blob();
    
    // Create a temporary link to trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${currentSong.title}.mp3`; // Set download filename
    
    // Append to document, click, and remove
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Clean up the URL object
    URL.revokeObjectURL(downloadLink.href);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
});

window.audioSource = new Audio(musicData[currentMusic].musicPath);

const initializeVolume = function() {
  audioSource.volume = 0.2;
  playerVolumeRange.value = 0.2;
  updateRangeFill.call(playerVolumeRange);
  
  // Set initial volume icon
  const volumeIcon = playerVolumeBtn.querySelector('[data-volume-icon]');
  if (volumeIcon) {
    volumeIcon.innerHTML = '<path d="M0 0h24v24H0z" fill="none"></path><path d="M18.5 12A4.5 4.5 0 0016 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z">';
  }
}

document.addEventListener('DOMContentLoaded', initializeVolume);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  // Update theme color based on the new image
  updateThemeColor();

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const resumeContext = async () => {
  const visualizer = Visualizer.getInstance();
  await visualizer.setupAudio(); // This replaces initializeAudioContext
};

const playMusic = async function () {
  try {
      if (audioSource.paused) {
          await resumeContext();
          await audioSource.play();
          playBtn.classList.add("active");
          playInterval = setInterval(updateRunningTime, 500);
      } else {
          audioSource.pause();
          playBtn.classList.remove("active");
          clearInterval(playInterval);
      }
  } catch (error) {
      console.error('Error playing audio:', error);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  if (!audioSource || !playerSeekRange || !playerRunningTime) return;

  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);
  updateRangeFill.call(playerSeekRange);
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */
const updateRangeFill = function (element) {
  const rangeInput = element || this;
  if (!rangeInput) return;
  
  const rangeFill = rangeInput.nextElementSibling;
  if (!rangeFill) return;

  // Special handling for volume range
  if (rangeInput === playerVolumeRange) {
    const percent = (rangeInput.value * 100);
    rangeFill.style.width = `${percent}%`;
    return;
  }

  // For seek range and others
  const min = rangeInput.min || 0;
  const max = rangeInput.max || 1;
  const value = rangeInput.value || 0;
  const percent = ((value - min) / (max - min)) * 100;
  rangeFill.style.width = `${percent}%`;
}

/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */



const seek = function () {
  if (!audioSource || !playerSeekRange || !playerRunningTime) return;
  
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
  updateRangeFill(playerSeekRange);
}

playerSeekRange.addEventListener("input", seek);




/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
    skipNext();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  if (!audioSource || !playerVolumeRange) return;
  
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  const volumeIcon = playerVolumeBtn.querySelector('[data-volume-icon]');
  if (!volumeIcon) return;

  if (audioSource.volume <= 0.1) {
    volumeIcon.innerHTML = '<path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zm2.91 4.217a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd">';
  } else if (audioSource.volume <= 0.5) {
    volumeIcon.innerHTML = '<path d="M0 0h24v24H0z" fill="none"></path><path d="M18.5 12A4.5 4.5 0 0016 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z">';
  } else {
    volumeIcon.innerHTML = '<path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zm5.274-.147a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10a7.97 7.97 0 00-2.343-5.657 1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd">';
  }

  updateRangeFill(playerVolumeRange);
}

// Add event listeners
playerVolumeRange.addEventListener("input", function() {
  changeVolume();
  updateRangeFill(this);
});

playerSeekRange.addEventListener("input", function() {
  seek();
  updateRangeFill(this);
});

// Initialize range fills on page load
document.addEventListener('DOMContentLoaded', function() {
  updateRangeFill(playerVolumeRange);
  updateRangeFill(playerSeekRange);
});

/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  const volumeIcon = playerVolumeBtn.querySelector('[data-volume-icon]');
  
  if (!volumeIcon) return;
  
  if (!audioSource.muted) {
    audioSource.muted = true;
    volumeIcon.innerHTML = '<path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zm2.91 4.217a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd">';
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);

