let skills = document.querySelector("#skills");
let modal = document.querySelector("#modal");
import { skillsArray, renderSkills } from "./habilidades.js";

renderSkills(skills, modal);

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
