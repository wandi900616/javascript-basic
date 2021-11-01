const data = [
  {
    id: 1,
    name: "color-flipper",
    ref: "./javascript-basic-projects-master/01-color-flipper/setup/index.html",
  },
  {
    id: 2,
    name: "counter",
    ref: "./javascript-basic-projects-master/02-counter/setup/index.html",
  },
  {
    id: 3,
    name: "reviews",
    ref: "./javascript-basic-projects-master/03-reviews/setup/index.html",
  },
  {
    id: 4,
    name: "navbar",
    ref: "./javascript-basic-projects-master/04-navbar/setup/index.html",
  },
  {
    id: 5,
    name: "sidebar",
    ref: "./javascript-basic-projects-master/05-sidebar/setup/index.html",
  },
  {
    id: 6,
    name: "modal",
    ref: "./javascript-basic-projects-master/06-modal/setup/index.html",
  },
  {
    id: 7,
    name: "questions",
    ref: "./javascript-basic-projects-master/07-questions/setup/index.html",
  },
  {
    id: 8,
    name: "menu",
    ref: "./javascript-basic-projects-master/08-menu/setup/index.html",
  },
];

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    // console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

const projectContainer = document.querySelector(".project-container");
// console.log(projectContainer.appendChild());

const projects = data
  .map((tutorial) => {
    const { id, name, ref } = tutorial;
    console.log(id, name, ref);

    return ` <div class="project">
          <span>tutorial ${id}</span>
          <a
            href="${ref}"
            >${name}</a
          >
        </div>`;
  })
  .join("");

console.log(projects);
projectContainer.innerHTML = projects;
