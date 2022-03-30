function myFunction(x) {
  if (x.matches) {
    console.log("");
  } else {
    let hamburger = document.getElementsByClassName("header__checkbox-label");
    hamburger[0].addEventListener("click", () => {
      console.log("clicked");
    });
  }
}

var x = window.matchMedia("(min-width: 900px)");
myFunction(x); // Call listener function at run time
