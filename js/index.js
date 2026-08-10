gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin
);


const smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 1,
  effects: true
});

function scrollToAbout() {
  smoother.scrollTo("#about", true, "top top");
}

function scrollToWork() {
  smoother.scrollTo("#work", true, "top top");
}

function scrollToHome() {
  smoother.scrollTo(0, true);
}