function scrollAll() {
  let two = document.querySelector(".one");
  let twoPosition = two.getBoundingClientRect().top;
  let screePosition = window.innerHeight / 1.3;
  if (twoPosition < screePosition) {
    two.classList.add("two");
  } else {
    two.classList.remove("two");
  }
}
window.addEventListener("scroll", scrollAll);
function scrollthree() {
  let two = document.querySelector(".three");
  let twoPosition = two.getBoundingClientRect().top;
  let screePosition = window.innerHeight / 1.3;
  if (twoPosition < screePosition) {
    two.classList.add("four");
  } else {
    two.classList.remove("four");
  }
}
window.addEventListener("scroll", scrollthree);
