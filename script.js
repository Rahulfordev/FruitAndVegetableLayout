function changeh2Color() {
  var h2Elements = document.querySelectorAll("h2");

  for (i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "white";
    document.body.style.backgroundColor = "black";
  }
}
var changeBgColor = document.getElementById("changeColorButton");
changeBgColor.addEventListener("click", changeh2Color);
