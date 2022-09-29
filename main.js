const btn = document.getElementById("submit");
const feedbacks = document.getElementById("feedbacks");
const first = document.getElementById("first");
const second = document.getElementById("second");
const feedbacks_rate = document.getElementById("feedbacks-rate");
let stars_counter = 0;

function toggleActive(e) {
  e.target.classList.toggle("checked");
}
function getStars(e) {
  stars_counter = e.target.innerText;
}
function changeText(rating) {
  feedbacks_rate.innerText = `You selected ${rating} out of 5`;
}
function toggleDisabled() {
  first.classList.toggle("disabled");
  second.classList.toggle("disabled");
}

feedbacks.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    toggleActive(e);
    getStars(e);
    changeText(stars_counter);
  }
});
btn.addEventListener("click", toggleDisabled);
