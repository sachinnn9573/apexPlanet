// ========== Image Carousel ==========
const images = [
  "assets/image1.jpg",
  "assets/image2.jpg",
  "assets/image3.jpg"
];

let currentIndex = 0;

function showImage() {
  const imageElement = document.getElementById("carouselImage");
  imageElement.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// Initialize first image
window.onload = showImage;


// ========== Random Joke API ==========
function fetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(response => response.json())
    .then(data => {
      document.getElementById("jokeText").textContent = data.joke;
    })
    .catch(error => {
      document.getElementById("jokeText").textContent = "Failed to fetch joke.";
      console.error("Error fetching joke:", error);
    });
}
