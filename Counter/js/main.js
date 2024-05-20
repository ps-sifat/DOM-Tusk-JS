const counter = document.querySelector(".counter");
const btn = document.querySelectorAll(".btn");

btn.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    console.log("click done");
  });
});
