"use strickt";
const clickBox = document.querySelector(".cookies-photo");
const point = document.getElementById("point-value");
const btnBuy = document.querySelector(".buy");
const cena = document.getElementById("cena");
const ilosc = document.getElementById("ilosc");
const mnoznik = document.getElementById("mnoznik");
const perClick = document.getElementById("per-click");
const sumOfCookies = document.getElementById("sumOfCookies");
const btnStats = document.getElementById("btnStats");
const btnCancel = document.getElementById("cancel");
const statsBox = document.querySelector(".stats");
const btnRestart = document.getElementById("btnRestart");
const restartBox = document.getElementById("restart");
const BtnTrueRestart = document.getElementById("trueRestart");
const btnCancelRestart = document.getElementById("cancelRestart");

let totalCookies = 0;
let pointSum = 0;
let piernikIlosc = 0;

clickBox.addEventListener("click", () => {
  clickUpdate();
  totalCookies = totalCookies + 1 + ilosc.innerHTML * mnoznik.innerHTML;
  point.innerHTML = pointSum;
  console.log(totalCookies);
  console.log(" piont");
  console.log(pointSum);
  ernedCookies();
});
btnBuy.addEventListener("click", () => {
  if (pointSum >= cena.innerHTML) {
    piernikIlosc++;
    pointSum = pointSum - cena.innerHTML;
    ilosc.innerHTML = piernikIlosc;
    point.innerHTML = pointSum;
    cenaUp();
    cookiesPerClick();
  }
});
const clickUpdate = () => {
  pointSum = pointSum + 1 + ilosc.innerHTML * mnoznik.innerHTML;
  return pointSum;
};
// cena up
const cenaUp = () => {
  cena.innerHTML = Math.round(cena.innerHTML * 1.2);
};
// cookies per click
const cookiesPerClick = () => {
  perClick.innerHTML = 1 + ilosc.innerHTML * mnoznik.innerHTML;
};
const ernedCookies = () => {
  sumOfCookies.innerHTML = totalCookies;
};
//Stats BTN
btnStats.addEventListener("click", () => {
  statsBox.classList.remove("hidden");
  statsBox.classList.add("flex-column");
});
btnCancel.addEventListener("click", () => {
  statsBox.classList.add("hidden");
  statsBox.classList.remove("flex-column");
});
//restart BTN
btnRestart.addEventListener("click", () => {
  restartBox.classList.remove("hidden");
  restartBox.classList.add("flex-column");
});
const cancel = () => {
  restartBox.classList.add("hidden");
  restartBox.classList.remove("flex-column");
};
btnCancelRestart.addEventListener("click", () => {
  cancel();
});
BtnTrueRestart.addEventListener("click", () => {
  cancel();
  cena.innerHTML = 20;
  ilosc.innerHTML = 0;
  sumOfCookies.innerHTML = 0;
  totalCookies = 0;
  cookiesPerClick();
  point.innerHTML = 0;
  pointSum = 0;
});
