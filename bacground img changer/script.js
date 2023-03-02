console.log("XD");
let mcqueen = document.querySelector("#MCQUEEN");
let panKrol = document.querySelector("#PAN-KROL");
let cruz = document.querySelector("#CRUZ");
let scania = document.querySelector("#SCANIA");
let marucha = document.querySelector("#MARUCHA");
let man = document.querySelector("#MAN");
let merc = document.querySelector("#MERC");
let reno = document.querySelector("#RENO");
let iveco = document.querySelector("#IVECO");

iveco.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/gowno.jpg')";
});
cruz.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/cruze.jpg')";
});
marucha.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/marek.jpg')";
});
panKrol.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/pankrol.jpg')";
});
mcqueen.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/mcqueen.jpg')";
});

man.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/man.jpg')";
});
scania.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/scania.jpg')";
});
merc.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/merc.jpg')";
});
reno.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('src/reno.jpg')";
});
