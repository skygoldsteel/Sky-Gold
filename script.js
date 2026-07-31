let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
let autoSlide;

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function startSlider() {
    autoSlide = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 6000); // 6 seconds
}

function stopSlider() {
    clearInterval(autoSlide);
}

document.querySelector(".next").addEventListener("click", () => {
    stopSlider();
    nextSlide();
    startSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
    stopSlider();
    prevSlide();
    startSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        stopSlider();
        slideIndex = index;
        showSlide(slideIndex);
        startSlider();
    });
});

showSlide(slideIndex);
startSlider();
