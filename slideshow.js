const leftArrow = document.querySelector('.slide-arrow-left');
const rightArrow = document.querySelector('.slide-arrow-right');
const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');
const slide3 = document.querySelector('.slide-3');

const slides = [ 
  slide1,
  slide2,
  slide3
];
let slideCounter = 0; 

leftArrow.onclick = function (e) {
    slideCounter -= 1;
    if(slideCounter === -1) {
        slideCounter = slides.length -1;
    }

    const lastSlide = document.querySelector('.slide-active');
    const currentSlide = slides[slideCounter];
    lastSlide.classList.remove("slide-active");
    currentSlide.classList.add("slide-active");
}

rightArrow.onclick = function (e) {
    slideCounter += 1;
    if(slideCounter === slides.length) {
        slideCounter = 0;
    }

    const lastSlide = document.querySelector('.slide-active');
    const currentSlide = slides[slideCounter];
    lastSlide.classList.remove("slide-active");
    currentSlide.classList.add("slide-active");
}

