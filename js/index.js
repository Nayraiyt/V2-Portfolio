gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 1,
  effects: true,
});

const mm = gsap.matchMedia();

mm.add("(min-width: 600px)", () => {
  gsap.from(".nav-wrapper", {
    scrollTrigger: {
      trigger: ".nav-wrapper",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    x: -1600,
    duration: 1,
  });
});

mm.add("(max-width: 600px)", () => {
  gsap.from(".nav-wrapper", {
    scrollTrigger: {
      trigger: ".nav-wrapper",
      start: "top",
      toggleActions: "play reverse play reverse",
    },
    x: 800,
    duration: 1,
  });
});

gsap.from(".work-experience-box", {
  scrollTrigger: {
    trigger: ".work-experience-box",
    start: "-40%",

    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 2,
});

gsap.from(".about-title-text", {
  scrollTrigger: {
    trigger: ".about-title-text",
    start: "top 110%",
    toggleActions: "play reverse play reverse",
  },
  y: 300,
  duration: 1.5,
});

gsap.from(".path-title", {
  scrollTrigger: {
    trigger: ".path-title",
    start: "top 100%",
    toggleActions: "play reverse play reverse",
  },
  y: 100,
  duration: 1,
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
