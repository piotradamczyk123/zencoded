// function myFunction(x) {
//   if (x.matches) {
//     console.log("");
//   } else {
//     let hamburger = document.getElementsByClassName(
//       "header__checkbox-label"
//     )[0];
//     let background = document.getElementsByClassName("header__background")[0];
//     let links = document.getElementsByClassName("header__link");
//     let linksWrapper = document.getElementsByClassName(
//       "header__links-wrapper"
//     )[0];
//     let delayInMilliseconds = 600;

//     hamburger.addEventListener("click", () => {
//       if (background.classList.contains("shown")) {
//         background.classList.remove("shown");

//         background.classList.remove("header__background--visible");
//         background.classList.add("header__background--invisible");
//         for (let index = 0; index < links.length; index++) {
//           const element = links[index];
//           element.classList.remove("header__link--fade-in");
//         }

//         for (let index = 0; index < links.length; index++) {
//           const element = links[index];
//           element.classList.add("header__link--fade-out");
//         }
//         setTimeout(function () {
//           linksWrapper.classList.remove("visible");
//           linksWrapper.classList.add("hidden");
//         }, delayInMilliseconds);
//       } else {
//         linksWrapper.classList.remove("hidden");
//         linksWrapper.classList.add("visible");
//         background.classList.add("shown");
//         background.classList.remove("header__background--invisible");
//         background.classList.add("header__background--visible");
//         for (let index = 0; index < links.length; index++) {
//           const element = links[index];
//           element.classList.remove("header__link--fade-out");
//         }
//         for (let index = 0; index < links.length; index++) {
//           const element = links[index];
//           element.classList.add("header__link--fade-in");
//         }
//       }
//     });
//   }
// }

// var x = window.matchMedia("(min-width: 900px)");
// myFunction(x); // Call listener function at run time

//jak to przerobic
//make event listener on label, not width -> otherwise execution of the function is related to the viewport width that was opened at the beginning
//than make translate with gsap, background leave as it is, but translate wrapper, and then turn on opacity, turn of opacity and then move back links

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
let toggle = 0;

var tl = gsap.timeline();

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
