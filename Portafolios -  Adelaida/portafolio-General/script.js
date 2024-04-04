window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".list-nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

/* ventana de las cards */

function showModal(card) {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modalContent");

  var title = card.querySelector("h2").innerHTML;
  var firstParagraph = card.querySelector("p").innerHTML;
  var iconHTML = card.querySelector("i").outerHTML;

  var cardContent = document.createElement("div");
  cardContent.innerHTML =
    "<h2>" + iconHTML + title + "</h2>" + "<p>" + firstParagraph + "</p>";

  modalContent.innerHTML = cardContent.innerHTML;

  modalContent.style.padding = "20px";

  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

/* slider */

let slideIndex = 0;
let slideInterval;

function plusSlide(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slides img");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  slideInterval = setInterval(() => {
    plusSlide(1);
  }, 3000);
}

showSlides(slideIndex);
