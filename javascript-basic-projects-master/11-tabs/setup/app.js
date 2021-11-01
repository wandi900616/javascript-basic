const tabBtns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const about = document.querySelector(".about");
// iswandi
// tabBtns.forEach((tabBtn) => {
//   tabBtn.addEventListener("click", (e) => {
//     const element = e.target;
//     // add class "active" to the button if id in dataset match
//     tabBtns.forEach((button) => {
//       button.dataset.id === element.dataset.id
//         ? button.classList.add("active")
//         : button.classList.remove("active");
//     });
//     contents.forEach((content) => {
//       content.id == element.dataset.id
//         ? content.classList.add("active")
//         : content.classList.remove("active");
//     });
//   });
// });
//end iswandi

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    // remove active from all buttonns
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });

    // add active to current button

    e.target.classList.add("active");

    // hide all content
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    // add active to content matching id in button dataset
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
