function myFunction(x) {
  if (x.matches) {
    console.log("");
  } else {
    let hamburger = document.getElementsByClassName(
      "header__checkbox-label"
    )[0];
    let background = document.getElementsByClassName("header__background")[0];
    let links = document.getElementsByClassName("header__link");
    let linksWrapper = document.getElementsByClassName(
      "header__links-wrapper"
    )[0];
    let delayInMilliseconds = 1000;

    hamburger.addEventListener("click", () => {
      if (background.classList.contains("shown")) {
        background.classList.remove("shown");
        background.classList.remove("header__background--visible");
        background.classList.add("header__background--invisible");
        for (let index = 0; index < links.length; index++) {
          const element = links[index];
          element.classList.remove("header__link--fade-in");
        }

        for (let index = 0; index < links.length; index++) {
          const element = links[index];
          element.classList.add("header__link--fade-out");
        }
        setTimeout(function () {
          linksWrapper.classList.add("header__links-wrapper--hidden");
        }, delayInMilliseconds);
      } else {
        linksWrapper.classList.remove("header__links-wrapper--hidden");
        background.classList.add("shown");
        background.classList.remove("header__background--invisible");
        background.classList.add("header__background--visible");
        for (let index = 0; index < links.length; index++) {
          const element = links[index];
          element.classList.remove("header__link--fade-out");
        }
        for (let index = 0; index < links.length; index++) {
          const element = links[index];
          element.classList.add("header__link--fade-in");
        }
      }
    });
  }
}

var x = window.matchMedia("(min-width: 900px)");
myFunction(x); // Call listener function at run time
