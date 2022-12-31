const links = document.querySelectorAll(".item");
const submit = document.querySelector(".botao");
const selected = document.querySelector("#selected");
const button = document.querySelector("button");
const message = document.querySelector("#message");

function mostrar() {
  const thanks = document.querySelector(".thank-you");
  thanks.classList.toggle("ativar");
  const rating = document.querySelector("main");
  rating.classList.toggle("esconder");
}

submit.addEventListener("click", mostrar);
