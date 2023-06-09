let lista = document.querySelectorAll(".lista");

for (let i = 0; i < lista.length; i++) {
  lista[i].onmouseover = function () {
    let j = 0;

    while (j < lista.length) {
      lista[j++].className = "lista";
    }

    lista[i].className = "lista activo";
  };
}

lista.forEach((elemens) => {
  elemens.addEventListener("mouseenter", function (event) {
    let bg = document.querySelector("body");

    let color = event.target.getAttribute("data-color");

    bg.style.backgroundColor = color;
  });
});
