let card = document.querySelector("#card");
let projects = [
  {
    link: "https://gnehemias04.github.io/Funval3/",
    img: "./img/My first portfolio.png",
    description: "My First Portfolio",
  },
  {
    link: "https://gnehemias04.github.io/Funval3/Dia-9/index.html",
    img: "./img/perritos.png",
    description: "Huellitas Refugio Animal",
  },
  {
    link: "https://gnehemias04.github.io/Funval3/Dia-4/index.html",
    img: "./img/practica calificada autosuficiencia.png",
    description: "Sea Autosuficiente",
  },
  {
    link: "https://gnehemias04.github.io/Funval3/Dia-3/index.html",
    img: "./img/Practica calificada Instagram.png",
    description: "Instagram Login",
  },
  {
    link: "https://gnehemias04.github.io/Funval3/Dia-2/index.html",
    img: "./img/Practica Calificada 1.png",
    description: "My First Landing Page",
  },
  {
    link: "https://gnehemias04.github.io/Funval3/Dia-10/index.html",
    img: "./img/bibliotecasite.png",
    description: "Book House",
  },
];

for (let i = 0; i < projects.length; i++) {
  card.innerHTML += `
    <div class="bg-black/20 dark:bg-gray-950/50 p-2 shrink-0 w-full rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-transform duration-300">
      <a href="${projects[i].link}" >
        <img src="${projects[i].img}" alt="Project ${i + 1}" />
        <p class="text-xl text-white my-3 flex justify-center">
          ${projects[i].description}
        </p>
      </a>
    </div>
  `;
}

// Dark mode
let html = document.querySelector("html");
let botonCambio = document.querySelector("#btn");
let todo = document.querySelector("#todo");
botonCambio.addEventListener("click", function () {
  todo.classList.toggle("dark");
});
// DropDown
let dropdown = document.querySelector("#dropdown");
let button = document.querySelector("#buttonD");
button.addEventListener("click", function () {
  dropdown.classList.toggle("hidden");
});
