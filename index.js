const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista");
  const itemsLi = document.querySelectorAll(".lista li");

  for (const el of itemsLi) {
    el.remove();
  }
  for (const item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    const claseAsignada = item.class || "item";
    newLiEl.classList.add(claseAsignada);
    listaEl.appendChild(newLiEl);
  }
}

main();
