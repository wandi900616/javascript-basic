const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//#f15025
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const color = document.querySelector(".color");
const navOut = document.querySelector("#simple");

const RandomColor = () => {
  //   const hexNumber = `#${`test`}`;

  let hexValue = "#";
  for (i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hex.length);

    hexValue += hex[randomNumber];
  }

  document.body.style.backgroundColor = hexValue;
  color.style.color = hexValue;
  color.textContent = hexValue;
};

const changeText = (target, textContent) => {
  target.textContent = textContent;
};

const Disco = () => {
  if (localStorage.getItem("clearInterval")) {
    clearInterval(parseInt(localStorage.getItem("clearInterval")));
    localStorage.clear("clearInterval");
    changeText(btn2, "DISCO!");
  } else {
    const clearInterval = setInterval(RandomColor, 500);
    localStorage.setItem("clearInterval", clearInterval);
    changeText(btn2, "STOP THE PARTY!");
  }
};

btn.addEventListener("click", RandomColor);
btn2.addEventListener("click", Disco);
navOut.addEventListener("click", Disco);
