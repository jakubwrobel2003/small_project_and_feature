const btn = document.querySelector(".btn");
const number = document.querySelector(".point");
let genNumberRed;
let genNumberGreen;
let genNumberBlue;

function genNumber() {
  let genNumber = Math.random() * 254;
  //console.log(Math.round(genNumber));
  return Math.round(genNumber);
}

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${genNumber()},${genNumber()},${genNumber()})`;
});
