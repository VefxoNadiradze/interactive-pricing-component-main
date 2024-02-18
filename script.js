const views = document.querySelector(".views");
const slider = document.querySelector(".range");
const money = document.querySelector(".moneySpan");
const check = document.querySelector(".check");

const pageView = ["10K", "50K", "100K", "500K", "1M"];
const preMonth = [8, 12, 16, 24, 36];

slider.addEventListener("input", () => {
  views.innerHTML = pageView[slider.value];
  money.innerHTML = preMonth[slider.value];
});
