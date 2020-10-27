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

function changeSlide() {
    const previousSlide = document.querySelector('.slide-active');
    const currentSlide = slides[slideCounter];
    previousSlide.classList.remove("slide-active");
    document.querySelector('.slide-previous').classList.remove("slide-previous");
    previousSlide.classList.add("slide-previous");
    currentSlide.classList.add("slide-active");
}


leftArrow.onclick = function (e) {
    slideCounter -= 1;
    if(slideCounter === -1) {
        slideCounter = slides.length -1;
    }

    changeSlide();
}

rightArrow.onclick = function (e) {
    slideCounter += 1;
    if(slideCounter === slides.length) {
        slideCounter = 0;
    }
    changeSlide();
}

