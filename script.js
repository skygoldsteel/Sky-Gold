// Mobile Navigation
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Gallery Image Animation
const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});

// Header Shadow on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Sky Gold Steel Almirah");
});
let slideIndex = 0;

showSlides();

function showSlides(){

let i;

let slides=document.getElementsByClassName("slides");

let dots=document.getElementsByClassName("dot");

for(i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

for(i=0;i<dots.length;i++){

dots[i].className=dots[i].className.replace(" active","");

}

slides[slideIndex-1].style.display="block";

dots[slideIndex-1].className+=" active";

setTimeout(showSlides,6000);

}

document.querySelector(".prev").onclick=function(){

slideIndex-=2;

if(slideIndex<0){

slideIndex=document.getElementsByClassName("slides").length-2;

}

showSlides();

}

document.querySelector(".next").onclick=function(){

showSlides();

}
