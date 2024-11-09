document.addEventListener("DOMContentLoaded", function () {
  const imageDiv = document.getElementById("image");
  const images = document.querySelectorAll(".preview");

  let currentIndex = 0;

  function displayImage(index) {
      if (index < images.length) {
          imageDiv.style.backgroundImage = `url(${images[index].src})`;
          imageDiv.innerHTML = images[index].alt;
      } else {
          imageDiv.style.backgroundImage = "url('')";
          imageDiv.innerHTML = "Click anywhere or press Space to cycle through images.";
      }
  }

  function cycleImages() {
      displayImage(currentIndex);
      currentIndex = (currentIndex + 1) % (images.length + 1);
  }

  // Cycle images on click anywhere in the body
  document.body.addEventListener("click", cycleImages);

  // Cycle images on Space key press
  document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
          event.preventDefault(); // Prevent scrolling
          cycleImages();
      }
  });
});

