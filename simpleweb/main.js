let slideIndex = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlide, 2000); // Change slide every 2 seconds
}

showSlide();

document.getElementById("prevBtn").addEventListener("click", function () {
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
});

document.getElementById("nextBtn").addEventListener("click", function () {
  showSlide();
});
