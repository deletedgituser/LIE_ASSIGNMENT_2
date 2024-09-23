document.addEventListener("DOMContentLoaded", () => {
    // Image Flip Logic
    const frontImage = document.getElementById('frontImage');
    const backImage = document.getElementById('backImage');
    let isFlipped = false;

    setInterval(() => {
        if (isFlipped) {
            frontImage.classList.remove('opacity-0');
            backImage.classList.add('opacity-0');
        } else {
            frontImage.classList.add('opacity-0');
            backImage.classList.remove('opacity-0');
        }
        isFlipped = !isFlipped;
    }, 2000);

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById("backToTopBtn");

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollFunction = () => {
        backToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";
    };

    window.addEventListener("scroll", scrollFunction);
    backToTopBtn.addEventListener("click", backToTop);

    // Burger Menu Logic
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("click", () => {
        document.getElementById("menu").classList.toggle("hidden");
    });

    const closeMenu = document.getElementById("close-menu");
    closeMenu.addEventListener("click", () => {
        document.getElementById("menu").classList.toggle("hidden");
    });

    document.querySelectorAll('#menu a').forEach(function(link) {
        link.addEventListener('click', function() {
          document.getElementById('menu').classList.add('hidden');
        });
      });
      

    // Audio Playback Logic
    const playButton = document.getElementById('playButton');
    const myAudio = document.getElementById('backgroundSound');

    playButton.addEventListener('click', function() {
        if (myAudio.paused) {
            playButton.textContent = 'Pause';
            myAudio.play();
        } else {
            myAudio.pause();
            playButton.textContent = 'Listen';
        }
    });

    // Video Playback Logic
    const imageView = document.getElementById('imageShow');
    const playVideoButton = document.getElementById('playVideoButton');
    const vid = document.getElementById('vidShow');
    const myVideo = document.getElementById('myVideo');

    // Initially hide the video
    vid.style.display = 'none';

    playVideoButton.addEventListener('click', function() {
        if (vid.style.display === 'none') {
            // Show video and hide image
            imageView.style.display = 'none'; // Hide the image
            vid.style.display = 'block'; // Show the video
            myVideo.play(); // Play the video
            playVideoButton.textContent = 'Pause Video';
        } else {
            // Hide video and show image
            myVideo.pause(); // Pause the video
            vid.style.display = 'none'; // Hide the video
            imageView.style.display = 'block'; // Show the image
            playVideoButton.textContent = 'Play Video';
        }
    });

    // Hide the video and show the image when the video ends
    myVideo.addEventListener('ended', function() {
        vid.style.display = 'none'; // Hide the video
        imageView.style.display = 'block'; // Show the image
        playVideoButton.textContent = 'Play Video';
    });
});
