const escolher = document.querySelectorAll(".numbers span");

function changeColor(event) {
  link.style.backgroundColor = "hsl(25, 97%, 53%)";
}

function numberClick(numero) {
  numero.addEventListener("click", changeColor);
}

escolher.forEach(numberClick);
console.log(escolher);
