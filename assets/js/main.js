/* ********************************** */
// SlideShow JS
/* ********************************** */
const leftArrow = document.querySelector(".slide-arrow-left");
const rightArrow = document.querySelector(".slide-arrow-right");
const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");

const slides = [slide1, slide2, slide3];
let slideCounter = 0;

function changeSlide() {
  const previousSlide = document.querySelector(".slide-active");
  const currentSlide = slides[slideCounter];
  previousSlide.classList.remove("slide-active");
  document.querySelector(".slide-previous").classList.remove("slide-previous");
  previousSlide.classList.add("slide-previous");
  currentSlide.classList.add("slide-active");
}

leftArrow.onclick = function (e) {
  slideCounter -= 1;
  if (slideCounter === -1) {
    slideCounter = slides.length - 1;
  }

  changeSlide();
};

rightArrow.onclick = function (e) {
  slideCounter += 1;
  if (slideCounter === slides.length) {
    slideCounter = 0;
  }
  changeSlide();
};

/* ********************************** */
// Services Section JS
/* ********************************** */
function changeItemInfo(item) {
  const itemContent = document.querySelector(".item-content-info");

  switch (item) {
    case "yh":
      itemContent.textContent =
        "Utbildningar som svarar mot arbetslivets behov av kvalificerad yrkeskompetens och som drivs i nära samverkan med företag och andra arbetsgivare.";
      break;
    case "kk":
      itemContent.textContent =
        "Utbildningar som är högskoleförberedande, yrkesinriktade eller inom kulturarvsområdet och drivs av privata utbildningsanordnare.";
      break;
    case "tu":
      itemContent.textContent =
        "Utbildningar till kontakttolk, teckenspråks- och dövblindtolk samt skrivtolk som drivs av folkhögskolor och studieförbund.";
      break;
    case "umt":
      itemContent.textContent =
        "Eftergymnasiala utbildningar inom olika områden som bedrivs av fristående skolor. Utbildningarnas statliga stöd omfattas endast av tillsyn.";
      break;
    case "seqf":
      itemContent.textContent =
        "Sveriges referensram för kvalifikationer (SeQF) ska synliggöra allt lärande för att öka matchningen på arbetsmarknaden.";
      break;
    case "vd":
      itemContent.textContent =
        "Validering innebär att en persons kunskaper och kompetenser kartläggs och bedöms på ett strukturerat sätt, för studier eller arbete, oavsett hur, var eller när de förvärvats.";
      break;

    default:
      itemContent.textContent =
        "Myndigheten för yrkeshögskolan har i uppdrag att ansvara för frågor som rör utbildningar inom yrkeshögskolan. Dessutom ansvarar vi för ytterligare frågor inom utbildningsområdet.";
  }
}
