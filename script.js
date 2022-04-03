gsap.registerPlugin(ScrollTrigger);

let vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

let hamburger = document.getElementsByClassName("header__checkbox-label")[0];

let background = document.getElementsByClassName("header__background")[0];
let links = document.getElementsByClassName("header__link");
let linksWrapper = document.getElementsByClassName("header__links-wrapper")[0];
let redBox = document.getElementsByClassName("hero__red-rectangle")[0];
let blackBox = document.getElementsByClassName("hero__black-rectangle")[0];
let circle = document.getElementsByClassName("hero__circle-main")[0];

let toggle = 0;

var tl = gsap.timeline();
var heroTL = gsap.timeline();
var computerTl = gsap.timeline();
var peopleTl = gsap.timeline();

hamburger.addEventListener("click", () => {
  if (toggle == 0) {
    //ON
    // console.log("on");
    toggle = 1;
    hamburger.classList.add("noclick");
    linksWrapper.classList.add("click");
    background.classList.add("visible");
    gsap.to(links, { opacity: 1, duration: 0.5 });
    tl.to(background, { opacity: 1, duration: 0 });

    tl.to(background, {
      x: 0,
      duration: 1,
      ease: "power2",
      onComplete: () => {
        hamburger.classList.remove("noclick");
      },
    });
    tl.to(links, { opacity: 1 });
  } else {
    //OFF
    // console.log("off");
    toggle = 0;
    hamburger.classList.add("noclick");
    hamburger.classList.add("visible");
    let vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    tl.to(background, { x: -vw, duration: 1, ease: "power2" });
    tl.to(background, {
      opacity: 0,
      duration: 0,
      onComplete: () => {
        background.classList.add("hidden");
        background.classList.remove("visible");
        hamburger.classList.remove("noclick");
        linksWrapper.classList.remove("click");

        window.addEventListener("resize", () => {
          var width = document.documentElement.clientWidth;
          // console.log(width);
          if (width >= 900) {
            linksWrapper.classList.add("click");
            gsap.to(links, { opacity: 1, duration: 0 });
            window.removeEventListener("resize", () => {});
          } else {
            gsap.to(links, { opacity: 0, duration: 0 });
          }
        });
      },
    });
    gsap.to(links, { opacity: 0, duration: 0.5 });
  }
});

//RECTANGLE ANIMATIONS
// heroTL.to(redBox, {
//   scrollTrigger: {
//     trigger: redBox,
//     // toggleActions: "start none none none",
//     start: "top",
//     end: vh / 2,
//     pin: ".hero",
//     scrub: 2,
//     markers: true,
//   },

//   x: vw,
//   rotate: 45,
// });

// heroTL.to(circle, {
//   scrollTrigger: {
//     trigger: redBox,
//     // toggleActions: "start none none none",
//     start: "top",
//     end: vh / 2,
//     pin: ".hero",
//     scrub: 2,
//     markers: true,
//   },

//   x: vw,
//   rotate: 45,
// });

// heroTL.to(blackBox, {
//   scrollTrigger: {
//     trigger: redBox,
//     // toggleActions: "start none none none",
//     start: "top",
//     end: vh / 2,
//     pin: ".hero",
//     scrub: 2,
//     markers: true,
//   },
//   x: -vh,
// });

// INTRO ANIMATIONS

// WHAT INTRO

gsap.to(".what__intro-highlight", {
  scrollTrigger: {
    trigger: ".what__heading-2",
    start: "top 90%",
    end: "top 60%",

    scrub: 3,
    onLeave: () => {
      gsap.to(".what__heading-2", {
        color: "white",
        duration: 1.5,
      });
    },
  },

  width: "120%",
  height: "150%",
  bottom: "-25%",
  color: "white",
  left: "-10%",
  zIndex: "-10",
});

//HOW INTRO

gsap.to(".how__intro-highlight", {
  scrollTrigger: {
    trigger: ".how__heading-2",
    start: "top 90%",
    end: "top 60%",

    scrub: 3,
    onLeave: () => {
      gsap.to(".how__heading-2", {
        color: "white",
        duration: 1.5,
      });
    },
  },

  width: "120%",
  height: "150%",
  bottom: "-25%",
  color: "white",
  left: "-10%",
  zIndex: "-10",
});

//Projects

gsap.to(".projects__intro-highlight", {
  scrollTrigger: {
    trigger: ".projects__heading-2",
    start: "top 90%",
    end: "top 60%",

    scrub: 3,
    onLeave: () => {
      gsap.to(".projects__heading-2", {
        color: "white",
        duration: 1.5,
      });
    },
  },

  width: "100%",
  height: "150%",
  bottom: "-25%",
  color: "white",

  zIndex: "-10",
});

//COMPUTER ANIMATION

gsap.to("#oval-1", {
  repeat: -1,
  rotation: -360,
  duration: 7,
  transformOrigin: "right 75%",
});

gsap.to("#oval-2", {
  repeat: -1,
  rotation: -360,
  duration: 7,
  transformOrigin: "right 75%",
});

gsap.to("#oval-3", {
  repeat: -1,
  rotation: 360,
  duration: 20,
  transformOrigin: "right 5%",
});

gsap.to("#rectangle-1", {
  x: "1000%",
  duration: 5,
  repeat: -1,
  yoyo: true,
});

gsap.to("#rectangle-2", {
  x: "-350%",
  duration: 5,
  repeat: -1,
  yoyo: true,
});

// gsap.to("#rectangle-3", {
//   rotate: 90,
//   transformOrigin: "center center",
//   duration: 0.5,
//   repeat: -1,
//   repeatDelay: 3,
//   yoyo: true,
// });

// gsap.to("#indicator", {
//   rotate: 54,
//   transformOrigin: "-15% 140%",
//   x: "21%",
//   repeat: -1,
//   duration: 2,
// });

// gsap.fromTo(
//   "#fill",
//   {
//     scale: 0,
//     transformOrigin: "left left",
//     rotate: 90,
//     duration: 3,
//     repeat: -1,
//   },
//   {
//     scale: 1,
//     rotate: 90,
//     transformOrigin: "right top",
//     duration: 3,
//     repeat: -1,
//   }
// );

// IMAGES ANIMATIONS
// gsap.from(
//   ".img-wrapper__img--col-3",
//   { y: "-100%" },
//   {
//     scrollTrigger: {
//       trigger: ".what-section-2",
//       start: "top 60%",
//       end: "bottom 90%",
//       markers: true,
//       scrub: 3,
//     },
//   }
// );

// gsap.from(
//   ".img-wrapper__img--col-2",
//   { y: "-50%" },
//   {
//     scrollTrigger: {
//       trigger: ".what-section-2",
//       start: "top 60%",
//       end: "bottom 90%",
//       markers: true,
//       scrub: 3,
//       // onLeave: peopleEnd,
//     },
//   }
// );

gsap.from(".img-wrapper__img--col-3", {
  y: "-100%",
  scrollTrigger: {
    trigger: ".what-section-2",
    start: "top center",
    end: "bottom 80%",
    scrub: 1,
  },
  duration: 5,
});

gsap.from(".img-wrapper__img--col-2", {
  y: "-50%",
  scrollTrigger: {
    trigger: ".what-section-2",
    start: "top center",
    end: "bottom 80%",
    scrub: 1,
  },
  duration: 5,
});

gsap.from(".img-wrapper__img--col-1", {
  y: "0",
  scrollTrigger: {
    trigger: ".what-section-2",
    start: "top center",
    end: "bottom 80%",
    scrub: 1,

    onLeave: peopleLeave,
    onEnterBack: peopleEnterBack,
  },
  duration: 5,
});

var peopleDuration = 1.5;

function peopleLeave() {
  gsap.to(".img-wrapper__img-1", { x: 10, y: 10, duration: peopleDuration });
  gsap.to(".img-wrapper__img-2", { x: 10, duration: peopleDuration });
  gsap.to(".img-wrapper__img-3", { x: 10, y: -10, duration: peopleDuration });
  gsap.to(".img-wrapper__img-4", { y: 10, duration: peopleDuration });
  gsap.to(".img-wrapper__img-5", {
    scale: 1.5,
    delay: 0.5,
    duration: peopleDuration,
    zIndex: 100,
  });
  gsap.to(".img-wrapper__img-6", { y: -10, duration: peopleDuration });
  gsap.to(".img-wrapper__img-7", { x: -10, y: 10, duration: peopleDuration });
  gsap.to(".img-wrapper__img-8", { x: -10, duration: peopleDuration });
  gsap.to(".img-wrapper__img-9", { x: -10, y: -10, duration: peopleDuration });
}

function peopleEnterBack() {
  gsap.to(".img-wrapper__img-1", { x: 0, y: 0, duration: peopleDuration });
  gsap.to(".img-wrapper__img-2", { x: 0, duration: peopleDuration });
  gsap.to(".img-wrapper__img-3", { x: 0, y: 0, duration: peopleDuration });
  gsap.to(".img-wrapper__img-4", { y: 0, duration: peopleDuration });
  gsap.to(".img-wrapper__img-5", {
    scale: 1,
    delay: 0,
    duration: peopleDuration,
    zIndex: 100,
  });
  gsap.to(".img-wrapper__img-6", { y: 0, duration: peopleDuration });
  gsap.to(".img-wrapper__img-7", { x: 0, y: 0, duration: peopleDuration });
  gsap.to(".img-wrapper__img-8", { x: 0, duration: peopleDuration });
  gsap.to(".img-wrapper__img-9", { x: 0, y: 0, duration: peopleDuration });
}
