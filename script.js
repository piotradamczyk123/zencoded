function myFunction(x) {
  if (x.matches) {
    console.log("");
  } else {
    let hamburger = document.getElementsByClassName(
      "header__checkbox-label"
    )[0];
    let background = document.getElementsByClassName("header__background")[0];
    hamburger.addEventListener("click", () => {
      if (background.classList.contains("shown")) {
        background.classList.remove("shown");
        background.classList.remove("header__background--visible");
      } else {
        background.classList.add("shown");
        background.classList.add("header__background--visible");
      }
    });
  }
}

var x = window.matchMedia("(min-width: 900px)");
myFunction(x); // Call listener function at run time
