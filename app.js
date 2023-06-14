document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].classList.remove("fade-in"); // Remove the "fade-in" class
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade-in"); // Add the "fade-in" class
  }

  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function() {
    plusSlides(-1);
  });

  nextButton.addEventListener("click", function() {
    plusSlides(1);
  });

  setInterval(function() {
    plusSlides(1);
  }, 5000);
});
