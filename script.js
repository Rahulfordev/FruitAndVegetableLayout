var navParimary = document.getElementById("nav-parimary");
var navParimaryLink = navParimary.getElementsByClassName("nav-parimary__link");

for (let i = 0; i < navParimaryLink.length; i++) {
  navParimaryLink[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
