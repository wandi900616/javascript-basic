//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  //   console.log(question);
  //   question.addEventListener("click", () => {
  //     question.classList.toggle("show-text");
  //   });
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const element = e.currentTarget.parentElement.parentElement;
//     element.classList.toggle("show-text");
//   });
// });
