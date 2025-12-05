let slideIndex = 0;
const slides = document.getElementsByClassName("slides");
const dots = document.getElementsByClassName("dot");

showSlide(slideIndex);

// Buttons
function changeSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

// Dot control
function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// Display
function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

// Auto play
setInterval(() => {
  changeSlide(1);
}, 5000);
