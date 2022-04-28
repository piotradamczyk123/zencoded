gsap.registerPlugin(ScrollTrigger);

// let vw = Math.max(
//   document.documentElement.clientWidth || 0,
//   window.innerWidth || 0
// );
// const vh = Math.max(
//   document.documentElement.clientHeight || 0,
//   window.innerHeight || 0
// );

function checkVW() {
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return vw;
}

let hamburger = document.getElementsByClassName("header__checkbox-label")[0];

let background = document.getElementsByClassName("header__background")[0];
let links = document.getElementsByClassName("header__link");
let linksWrapper = document.getElementsByClassName("header__links-wrapper")[0];
let redBox = document.getElementsByClassName("hero__red-rectangle")[0];
let blackBox = document.getElementsByClassName("hero__black-rectangle")[0];

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

  width: "107%",
  height: "150%",
  bottom: "-25%",
  color: "white",

  zIndex: "-10",
});

//Contact

gsap.to(".contact__intro-highlight", {
  scrollTrigger: {
    trigger: ".contact__heading-2",
    start: "top 90%",
    end: "top 60%",

    scrub: 3,
    onLeave: () => {
      gsap.to(".contact__heading-2", {
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

//COMPUTER ANIMATION

gsap.to("#oval-1", {
  repeat: -1,
  rotation: -360,
  duration: 7,
  transformOrigin: "right 75%",
  scrollTrigger: {
    trigger: ".what-section-1",
    start: "top bottom",

    toggleActions: "play pause resume pause",
  },
});

gsap.to("#oval-2", {
  repeat: -1,
  rotation: -360,
  duration: 7,
  transformOrigin: "right 75%",
  scrollTrigger: {
    trigger: ".what-section-1",
    start: "top bottom",

    toggleActions: "play pause resume pause",
  },
});

gsap.to("#oval-3", {
  repeat: -1,
  rotation: 360,
  duration: 20,
  transformOrigin: "right 5%",
  scrollTrigger: {
    trigger: ".what-section-1",
    start: "top bottom",

    toggleActions: "play pause resume pause",
  },
});

gsap.to("#rectangle-1", {
  x: "1000%",
  duration: 5,
  repeat: -1,
  yoyo: true,
  scrollTrigger: {
    trigger: ".what-section-1",
    start: "top bottom",

    toggleActions: "play pause resume pause",
  },
});

gsap.to("#rectangle-2", {
  x: "-350%",
  duration: 5,
  repeat: -1,
  yoyo: true,
  scrollTrigger: {
    trigger: ".what-section-1",
    start: "top bottom",

    toggleActions: "play pause resume pause",
  },
});

gsap.to("#rectangle-3", {
  rotate: 90,
  transformOrigin: "center center",
  duration: 0.5,
  repeat: -1,
  repeatDelay: 3,
  yoyo: true,
  scrollTrigger: {
    trigger: ".what-section-1",
    start: "top bottom",

    toggleActions: "play pause resume pause",
  },
});

//Section 3 animation

const section3TL = gsap.timeline();

gsap.fromTo(
  "#indicator",
  {
    rotate: -65,
    x: "-100%",
    y: "5%",
    transformOrigin: "10% 145%",

    scrollTrigger: {
      trigger: ".what-section-3__phone--outside",
      start: "top top",

      scrub: 5,
    },
  },
  {
    x: "80%",
    y: "-3%",

    rotate: 65,
    transformOrigin: "4% 147%",

    scrollTrigger: {
      trigger: ".what-section-3__phone--outside",
      start: "top center",
      end: "center center",

      scrub: 5,
    },
  }
);

gsap.fromTo(
  "#check-1",
  {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".what-section-3__phone--outside",
      start: "center 70%",
    },
  },
  {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".what-section-3__phone--outside",
      start: "center 70%",
    },
  }
);

gsap.fromTo(
  "#check-2",
  {
    opacity: 0,
    duration: 1,

    scrollTrigger: {
      trigger: ".what-section-3__phone--outside",
      start: "center 60%",
    },
  },
  {
    opacity: 1,
    duration: 1,

    scrollTrigger: {
      trigger: ".what-section-3__phone--outside",
      start: "center 60%",
    },
  }
);

gsap.fromTo(
  "#check-3",
  {
    opacity: 0,
    duration: 1,

    scrollTrigger: {
      trigger: ".what-section-3__phone--outside",
      start: "center 50%",
    },
  },
  {
    opacity: 1,
    duration: 1,

    scrollTrigger: {
      trigger: ".what-section-3__phone--outside",
      start: "center 50%",
    },
  }
);

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
    start: "top 60%",
    end: "bottom 95%",
    scrub: 1,
  },
});

// gsap.from(".img-wrapper__img--col-3", {
//   y: "-100%",
//   scrollTrigger: {
//     trigger: ".what-section-2",
//     start: "top center",
//     end: "bottom 70%",
//     scrub: 1,
//   },
//   duration: 5,
// });

gsap.from(".img-wrapper__img--col-2", {
  y: "-50%",
  scrollTrigger: {
    trigger: ".what-section-2",
    start: "top 60%",
    end: "bottom 95%",
    scrub: 1,
  },
});

gsap.from(".img-wrapper__img--col-1", {
  y: "0",
  scrollTrigger: {
    trigger: ".what-section-2",
    start: "top 60%",
    end: "bottom 95%",
    scrub: 1,

    onLeave: peopleLeave,
    onEnterBack: peopleEnterBack,
  },
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

var redRectangle = document.querySelector(".hero__red-rectangle");
var blackRectangle = document.querySelector(".hero__black-rectangle");
var text = document.querySelector(".hero__textwrapper");
var circle = document.querySelector(".hero__circle-main");
var header = document.querySelector(".header");

gsap.to(redRectangle, {
  scrollTrigger: {
    trigger: header,
    start: "top top",
    end: "1000 top",
    scrub: 1,
  },
  x: checkVW(),
  rotation: 90,
});

gsap.to(blackRectangle, {
  scrollTrigger: {
    trigger: header,
    start: "top top",
    end: "1000 top",
    scrub: 2,
  },
  x: checkVW(),
  rotation: 90,
});

gsap.to(circle, {
  scrollTrigger: {
    trigger: header,
    start: "top top",
    end: "1000 top",
    scrub: 1,
  },
  x: checkVW(),
  rotation: 90,
});

gsap.to(text, {
  scrollTrigger: {
    trigger: header,
    start: "top top",
    end: "1000 top",
    scrub: 1,
  },
  x: -checkVW(),
  rotation: -90,
});

//WHAT 4
// var redRectangleSmall = document.querySelector(
//   ".what-section-4__rectangle--red"
// );

// gsap.from(".what-section-4__rectangle--red", {
//   scrollTrigger: {
//     trigger: ".what-section-4__text-wrapper",
//     start: "top center",
//     end: "bottom center",
//     scrub: 1,
//   },

//   right: 0,
// });

// gsap.to(".what-section-4__rectangle--red", {
//   scrollTrigger: {
//     trigger: ".what-section-4__text-wrapper",
//     start: "top center",
//     end: "bottom center",
//     scrub: 1,
//   },

//   top: 0,
// });

// gsap.from(".what-section-4__rectangle--white", {
//   scrollTrigger: {
//     trigger: ".what-section-4__text-wrapper",
//     start: "top center",
//     end: "bottom center",
//     scrub: 1,
//   },

//   left: 0,
// });

// gsap.to(".what-section-4__rectangle--white", {
//   scrollTrigger: {
//     trigger: ".what-section-4__text-wrapper",
//     start: "top center",
//     end: "bottom center",
//     scrub: 1,
//   },

//   top: -2,
// });

//Contanct Section

// gsap.to("#object-4", {
//   x: "-200%",
//   rotation: 90,
//   transformOrigin: "bottom center",
//   repeat: Infinity,
//   yoyo: true,
// });

//Cards

var card1 = document.querySelector(".card__card-1");
var card2 = document.querySelector(".card__card-2");
var card3 = document.querySelector(".card__card-3");
var card4 = document.querySelector(".card__card-4");

cardTl1 = gsap.timeline();
cardTl2 = gsap.timeline();
cardTl3 = gsap.timeline();
var cardSwitch = 0;

//state color function

function changeColorIn(cardNumber) {
  if (cardNumber != 4) {
    gsap.to(".card__card-" + cardNumber, {
      backgroundColor: "#c81818",
      color: "#ffffff",
    });
    gsap.to("#card-" + cardNumber + "__icon-svg", {
      attr: { fill: "#ffffff" },
    });
    gsap.to(".card__line-" + cardNumber, { borderTopColor: "#ffffff" });
  } else {
    {
      gsap.to(".card__card-" + cardNumber, {
        backgroundColor: "#c81818",
        color: "#ffffff",
      });
      gsap.to("#card-" + cardNumber + "__icon-svg", {
        attr: { stroke: "#ffffff" },
      });
      gsap.to("#card-" + cardNumber + "__icon-svg-o", {
        attr: { fill: "#ffffff" },
      });
      gsap.to(".card__line-" + cardNumber, { borderTopColor: "#ffffff" });
    }
  }
}

function changeColorOut(cardNumber) {
  if (cardNumber != 4) {
    gsap.to(".card__card-" + cardNumber, {
      backgroundColor: "#fff6f6",
      color: "#000000",
    });
    gsap.to("#card-" + cardNumber + "__icon-svg", {
      attr: { fill: "#726E6E" },
    });
    gsap.to(".card__line-" + cardNumber, { borderTopColor: "#726e6e" });
  } else {
    gsap.to(".card__card-" + cardNumber, {
      backgroundColor: "#fff6f6",
      color: "#000000",
    });

    gsap.to("#card-" + cardNumber + "__icon-svg", {
      attr: { stroke: "#726E6E" },
    });
    gsap.to("#card-" + cardNumber + "__icon-svg-o", {
      attr: { fill: "#726E6E" },
    });
    gsap.to(".card__line-" + cardNumber, { borderTopColor: "#726e6e" });
  }
}

//card1
changeColorIn(1);

//card2

card2.addEventListener("click", () => {
  if (cardSwitch == 0) {
    cardSwitch = 1;
    changeColorOut(1);
    changeColorIn(2);
    cardTl1.to(card1, {
      x: -275,
      rotate: -25,
    });
    gsap.to(card3, { x: 100, rotate: 15 });
    gsap.to(card4, { x: 100, rotate: 15 });
    cardTl1.to(card1, { x: -100, rotate: -15, zIndex: -5 });
    card1.classList.add("noclick");
    card3.classList.add("noclick");
    card4.classList.add("noclick");
  } else {
    cardSwitch = 0;
    changeColorIn(1);
    changeColorOut(2);
    cardTl1.to(card1, { x: -275, rotate: 0, zIndex: 5 });
    gsap.to(card3, { x: 0, rotate: 0 });
    gsap.to(card4, { x: 0, rotate: 0 });
    cardTl1.to(card1, { x: 0, rotate: 0 });
    card1.classList.remove("noclick");
    card3.classList.remove("noclick");
    card4.classList.remove("noclick");
  }
});

//card3

card3.addEventListener("click", () => {
  if (cardSwitch == 0) {
    cardSwitch = 1;
    changeColorOut(1);
    changeColorIn(3);
    cardTl1.to(card1, { x: -250, rotate: -15 });
    cardTl2.to(card2, { x: -250, rotate: -15 });
    cardTl1.to(card1, { x: -100, rotate: -15, zIndex: -4 });
    cardTl2.to(card2, { x: -100, rotate: -15, zIndex: -5 });
    gsap.to(card4, { x: 100, rotate: 15 });
    card1.classList.add("noclick");
    card2.classList.add("noclick");
    card4.classList.add("noclick");
  } else {
    cardSwitch = 0;
    changeColorIn(1);
    changeColorOut(3);
    cardTl1.to(card1, { x: -250, rotate: 0, zIndex: 4 });
    cardTl2.to(card2, { x: -250, rotate: 0, zIndex: 3 });
    cardTl1.to(card1, { x: 0, rotate: 0 });
    cardTl2.to(card2, { x: 0, rotate: 0 });
    gsap.to(card4, { x: 0, rotate: 0 });
    card1.classList.remove("noclick");
    card2.classList.remove("noclick");
    card4.classList.remove("noclick");
  }
});

//card4

card4.addEventListener("click", () => {
  if (cardSwitch == 0) {
    cardSwitch = 1;
    changeColorOut(1);
    changeColorIn(4);
    cardTl1.to(card1, { x: -250, rotate: -15 });
    cardTl2.to(card2, { x: -250, rotate: -15 });
    cardTl3.to(card3, { x: -250, rotate: -15 });

    cardTl1.to(card1, { x: 0, rotate: -15 });
    cardTl2.to(card2, { x: 0, rotate: -15 });
    cardTl3.to(card3, { x: 0, rotate: -15 });
    gsap.to(card4, { zIndex: 10, delay: 0.5 });

    card1.classList.add("noclick");
    card2.classList.add("noclick");
    card3.classList.add("noclick");
  } else {
    cardSwitch = 0;
    changeColorIn(1);
    changeColorOut(4);
    gsap.to(card4, { zIndex: 1 });
    cardTl1.to(card1, { x: -250, rotate: -15 });
    cardTl2.to(card2, { x: -250, rotate: -15 });
    cardTl3.to(card3, { x: -250, rotate: -15 });
    cardTl1.to(card1, { x: 0, rotate: 0 });
    cardTl2.to(card2, { x: 0, rotate: 0 });
    cardTl3.to(card3, { x: 0, rotate: 0 });

    card1.classList.remove("noclick");
    card2.classList.remove("noclick");
    card3.classList.remove("noclick");
  }
});
