const views = document.querySelector(".views");
const slider = document.querySelector(".range");
const money = document.querySelector(".moneySpan");
const check = document.querySelector(".check");
const Switch = document.querySelector(".switch");

const pageView = ["10K", "50K", "100K", "500K", "1M"];
const preMonth = [8, 12, 16, 24, 36];

slider.addEventListener("input", () => {
  views.innerHTML = pageView[slider.value];
  money.innerHTML = preMonth[slider.value];
  if (Switch.classList.contains("activeSwitch")) {
    yearlyFun();
  } else {
    money.innerHTML = preMonth[slider.value];
  }
});

Switch.addEventListener("click", () => {
  Switch.classList.toggle("activeSwitch");

  if (Switch.classList.contains("activeSwitch")) {
    yearlyFun();
  } else {
    money.innerHTML = preMonth[slider.value];
  }
});

function yearlyFun() {
  money.innerHTML = preMonth[slider.value] * 12 * 0.75;
}
