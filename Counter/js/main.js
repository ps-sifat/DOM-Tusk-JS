const counter = document.querySelector(".counter");
const btn = document.querySelectorAll(".btn");

let count = 0;
btn.forEach((btn) => {
  btn.addEventListener("click", (eachBtn) => {
    let className = eachBtn.target.className;

    if (className.includes("Incress")) {
      count++;
    } else if (className.includes(`Decress`)) {
      count--;
    } else {
      count = 0;
    }
    counter.innerHTML = count;
  });
});
