"use strict";

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const btn = document.getElementById("btn");
const btnClose = document.querySelectorAll(".btnClose");

let delta = document.querySelector(".delta");
let x1 = document.querySelector(".x1");
let x2 = document.querySelector(".x2");
let x0 = document.querySelector(".x0");
const answer = document.querySelector(".answer");
const overlay = document.querySelector(".overlay");

const m2 = document.getElementById("2miejsca");
const m1 = document.getElementById("1miejsca");
const m0 = document.getElementById("0miejsca");

//

/////////////////////

////////////////
////
///////////////
btn.addEventListener("click", () => {
  let del = b.value * b.value - 4 * a.value * c.value;
  //  answer.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log(del);
  delta.textContent = del;
  if (delta.textContent > 0) {
    x1.textContent = Math.round((-b.value - Math.sqrt(del)) / (2 * a.value));
    x2.textContent = Math.round((-b.value + Math.sqrt(del)) / (2 * a.value));
    m2.classList.remove("hidden");
  }
  if (del == 1) {
    x0.textContent = Math.round(-b.value / (2 * a.value));
    m1.classList.remove("hidden");
  }
  if (del < 0) {
    m0.classList.remove("hidden");
  }
});

const closeModal = function () {
  m0.classList.add("hidden");
  m1.classList.add("hidden");
  m2.classList.add("hidden");
  overlay.classList.add("hidden");
};

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !answer.classList.contains("hidden")) {
    closeModal();
  }
});
overlay.addEventListener("click", closeModal);

for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener("click", () => {
    m0.classList.add("hidden");
    m1.classList.add("hidden");
    m2.classList.add("hidden");
    overlay.classList.add("hidden");
  });
}
