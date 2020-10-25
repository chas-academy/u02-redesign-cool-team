const leftArrow = document.querySelector('.slide-arrow-left');
const lastSlide = document.querySelector('.slide-active');
const currentSlide = document.querySelector('.slide-3');


leftArrow.onclick = function (e) {
    lastSlide.classList.remove("slide-active");
    currentSlide.classList.add("slide-active");
}

