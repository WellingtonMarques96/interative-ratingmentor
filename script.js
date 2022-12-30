const submit = document.querySelector(".botao");

function mostrar() {
  const thanks = document.querySelector(".thank-you");
  thanks.classList.toggle("ativar");
  const rating = document.querySelector("main");
  rating.classList.toggle("esconder");
}

submit.addEventListener("click", mostrar);

const numbers = document.querySelectorAll("#rating li");

function changeColor(event) {
  const numero = event.currentTarget;

  console.log(numero);
}

function escolher(numero) {
  numero.addEventListener("click", changeColor);
}

numbers.forEach(escolher);
