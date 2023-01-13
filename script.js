const submit = document.querySelector(".botao");
const selected = document.querySelector("#selected");
const button = document.querySelector("button");
const message = document.querySelector("message");
const links = document.querySelectorAll(".item");

function mostrar() {
  const thanks = document.querySelector(".thank-you");
  thanks.classList.toggle("ativar");
  const rating = document.querySelector("main");
  rating.classList.toggle("esconder");
}

submit.addEventListener("click", mostrar);

function changeColor(event) {
  links.forEach((link) => {
    link.classList.remove("selected");
  });
  event.currentTarget.classList.add("selected");
}

links.forEach((link) => {
  link.addEventListener("click", changeColor);
});
