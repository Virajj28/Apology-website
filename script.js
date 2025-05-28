// Function to hide all sections
function hideAllSections() {
  var sections = document.querySelectorAll('.section');
  sections.forEach(function (section) {
    section.style.display = 'none';
  });

  // Also hide video if it was visible
  var videoContainer = document.getElementById("video-container");
  if (videoContainer) videoContainer.style.display = 'none';
}

// Function to show only the apology section
function showApology() {
  hideAllSections();
  document.getElementById('apology-section').style.display = 'block';
}

// Call showApology when the page loads
document.addEventListener('DOMContentLoaded', function () {
  hideAllSections(); // Hide all sections on load
  showApology();     // Show apology section by default
});

// Event listener for apology navigation
document.getElementById('apology-link').addEventListener('click', showApology);

// Apology heart animation
document.getElementById('acceptButton').addEventListener('click', function () {
  fixHeart();
});

function fixHeart() {
  document.getElementById('broken-heart').style.display = 'none';
  document.getElementById('fixed-heart').style.display = 'block';
  createSmallHearts();
  document.getElementById('acceptButton').disabled = true;
}

function createSmallHearts() {
  var smallHeartsContainer = document.getElementById('small-hearts-container');
  for (var i = 0; i < 20; i++) {
    var smallHeart = document.createElement('div');
    smallHeart.className = 'small-heart';
    smallHeartsContainer.appendChild(smallHeart);
    animateSmallHeart(smallHeart);
  }
}

function animateSmallHeart(smallHeart) {
  var animationDuration = Math.random() * 2 + 4;
  var startPositionX = Math.random() * 100;
  smallHeart.style.animation = `rise ${animationDuration}s linear`;
  smallHeart.style.left = `${startPositionX}vw`;
  setTimeout(function () {
    smallHeart.remove();
  }, animationDuration * 1000);
}

// Optional: Keep audio controls if needed
function toggleAudio() {
  const backgroundMusic = document.getElementById('backgroundMusic');
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
}

// Visit by clicking "Apology" first. Immerse yourself to explore the profound emotions and genuine steps I'm eager to take for reconciliation. Every word penned reflects a
//       sincere commitment to make amends and cherish the beauty of our shared existence. Your understanding holds
//       immeasurable significance. Thank you!