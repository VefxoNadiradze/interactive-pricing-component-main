const views = document.querySelector(".views");
const slider = document.querySelector(".range");
const money = document.querySelector(".moneySpan");
const check = document.querySelector(".check");
const Switch = document.querySelector(".switch");
const monthYearSpan = document.querySelector(".month-yearSpan");

const pageView = ["10K", "50K", "100K", "500K", "1M"];
const preMonth = [8, 12, 16, 24, 36];

//slider function to change value of viewers and payment
slider.addEventListener("input", () => {
  views.innerHTML = pageView[slider.value];
  money.innerHTML = preMonth[slider.value];

  const sliderWidth = slider.value * 25;

  slider.style.background = `

  linear-gradient(
    to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${sliderWidth}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%
    
  `;

  if (Switch.classList.contains("activeSwitch")) {
    yearlyFun();
  } else {
    money.innerHTML = preMonth[slider.value];
  }
});

// functionality to switch monthly to yearly payment
Switch.addEventListener("click", () => {
  Switch.classList.toggle("activeSwitch");

  if (Switch.classList.contains("activeSwitch")) {
    yearlyFun();
    monthYearSpan.innerHTML = "/ year";
  } else {
    money.innerHTML = preMonth[slider.value];
    monthYearSpan.innerHTML = "/ month";
  }
});

// functionality of yearly payment
function yearlyFun() {
  money.innerHTML = preMonth[slider.value] * 12 * 0.75;
}
