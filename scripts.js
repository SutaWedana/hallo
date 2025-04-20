const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveToNextSlide, 4000); // 4 detik




  
// Animate on scroll using Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section, .skill-item, .project-item').forEach(item => {
    observer.observe(item);
});

const audio = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

// Coba autoplay dengan mute agar diizinkan oleh browser
window.addEventListener("DOMContentLoaded", function () {
  audio.muted = true;
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Autoplay berhasil dengan mute
      audio.muted = false;
      isPlaying = true;
      musicBtn.textContent = '🎵 Music On';
    }).catch((err) => {
      // Autoplay gagal (misalnya di browser iOS), tunggu interaksi pengguna
      console.log("Autoplay gagal, menunggu interaksi pengguna:", err);
      musicBtn.textContent = '🎵 Play Music';
    });
  }
});

// Pastikan play saat interaksi pertama
document.body.addEventListener('click', () => {
  if (!isPlaying) {
    audio.muted = false;
    audio.play().then(() => {
      isPlaying = true;
      musicBtn.textContent = '🎵 Music On';
    });
  }
}, { once: true });

// Toggle tombol musik
musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    musicBtn.textContent = '🔇 Music Off';
  } else {
    audio.play().then(() => {
      musicBtn.textContent = '🎵 Music On';
    }).catch((e) => {
      console.log("Gagal memutar musik:", e);
    });
  }
  isPlaying = !isPlaying;
});


// Tambahkan ini ke scripts.js
const cursor = document.getElementById("cursor-glow");
document.addEventListener("mousemove", e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Tambahkan ke scripts.js
document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "j") {
    alert("🔥 You just discovered a hidden message from Juice!");
  }
});

