export let skillsArray = [
  {
    image: "./img/react.png",
    type: "React",
    id: "reactImg",
    description:
      "React is a JavaScript library used to build user interfaces, especially for web apps. It lets you create reusable components and updates the screen efficiently when data changes.",
  },
  {
    image: "./img/html.png",
    type: "Html",
    id: "htmlImg",
    description:
      "HTML (HyperText Markup Language) is the standard language used to structure content on the web. It defines elements like headings, paragraphs, links, images, and more in a webpage.",
  },
  {
    image: "./img/js.png",
    type: "JavaScript",
    id: "javascriptImg",
    description:
      "JavaScript (JS) is a programming language used to make websites interactive. It runs in the browser and handles things like clicks, animations, and data updates.",
  },
  {
    image: "./img/css.png",
    type: "Css",
    id: "cssImg",
    description:
      "CSS (Cascading Style Sheets) is used to style and layout HTML elements on a webpage. It controls things like colors, fonts, spacing, and responsiveness across different screen sizes.",
  },
  {
    image: "./img/taildwind-css.png",
    type: "Tailwind",
    id: "tailwindImg",
    description:
      "Tailwind CSS is a utility-first CSS framework for building custom designs quickly. It lets you style elements directly in your HTML using predefined classes like p-4, text-center, or bg-blue-500.",
  },
  {
    image: "./img/vs studiopng.png",
    type: "Visual Studio Code",
    id: "visualImg",
    description: "",
  },
];
export function renderSkills(skills, modal) {
  skillsArray.forEach((skill) => {
    const img = document.createElement("img");
    img.src = skill.image;
    img.alt = skill.type;
    img.id = skill.id;
    img.className =
      "transform transition-transform duration-300 hover:scale-125 rounded-full";

    img.addEventListener("click", () => {
      modal.innerHTML = `
    <button
          id="buttonA"
          type="button"
          class="h-10 w-15 text-blue-700  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          X
        </button>
      <h3 class="text-4xl ">${skill.type}</h3>
        <p class="text-2xl">
          ${skill.description}
        </p>
        
    `;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      let buttonA = document.querySelector("#buttonA");
      buttonA.addEventListener("click", () => {
        modal.classList.add("hidden");
      });
    });

    skills.appendChild(img);
  });
}
