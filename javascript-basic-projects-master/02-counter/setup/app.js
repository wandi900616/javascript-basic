//set initial count

let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
// console.log(Array.from(buttons));

buttons.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    } else {
      console.log("no matching value");
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
