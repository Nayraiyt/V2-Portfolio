function scrollToAbout() {
  smoother.scrollTo("#about", true, "top top");
}

function scrollToWork() {
  smoother.scrollTo("#work", true, "top top");
}

function scrollToHome() {
  smoother.scrollTo(0, true);
}

const cards = document.querySelectorAll(".hobbies-card");
const hbutton = document.querySelector("#hobbies-button");

let currentIndex = 0;

cards.forEach((card, index) => {
  card.style.display = index === 0 ? "block" : "none";
});


hbutton.addEventListener("click", () => {
  cards[currentIndex].style.display = "none";

  currentIndex = (currentIndex + 1) % cards.length;

  cards[currentIndex].style.display = "block";
});