let currentAudio = null;
let currentSongIndex = 0;
const audioElements = document.querySelectorAll('audio');

function playSong(songIndex) {
    const audioElement = audioElements[songIndex];
    
    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause(); // Pause the currently playing song
        currentAudio.currentTime = 0; // Reset the current song to start
    }

    if (audioElement.paused) {
        audioElement.play(); // Play the selected song
        currentAudio = audioElement; // Update the currently playing song
    } else {
        audioElement.pause(); // Pause the selected song if already playing
        audioElement.currentTime = 0; // Reset the selected song to start
        currentAudio = null; // Update the currently playing song to null
    }
}

function playNextSong() {
    const currentAudio = audioElements[currentSongIndex];
    currentAudio.pause(); // Pause the current song
    currentAudio.currentTime = 0; // Reset the current song to start
    currentSongIndex = (currentSongIndex + 1) % audioElements.length; // Move to the next song index
    audioElements[currentSongIndex].play(); // Play the next song
    currentAudio = audioElements[currentSongIndex]; // Update the currently playing song
}

// Add event listeners to all audio elements to play the next song when the current one ends
audioElements.forEach((audio, index) => {
    audio.addEventListener('ended', playNextSong);
});

// Start playing the first song
//audioElements[currentSongIndex].play();
//currentAudio = audioElements[currentSongIndex]; // Update the currently playing song
