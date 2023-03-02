"use strict";
const btn = document.querySelector("button");
let resoult = document.querySelector("p");
const waga = document.getElementById("waga");
const high = document.getElementById("high");

const bmiCalc = function (waga, high) {
  return Math.round(waga / ((high / 100) * (high / 100)));
};
btn.addEventListener("click", () => {
  let selected = document.querySelector("input[type='radio']:checked");

  if (waga.value > 0 && high.value > 0) {
    if (selected.value == "Kg") {
      resoult.innerText = " Your's BMI:" + bmiCalc(waga.value, high.value);
    } else {
      let lbsWage = Math.round(waga.value * 0.45359237);
      resoult.innerText = " Your's BMI:" + bmiCalc(lbsWage, high.value);
    }
  }
});
