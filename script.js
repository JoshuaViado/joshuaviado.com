function setCoords(event) {
  var x = event.clientX;
  var y = event.clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
  console.log(document.documentElement.style.getPropertyValue("--cursorX"));
}

function hoverContainer() {
  document.documentElement.style.setProperty("--containerIndex", "-2");
}
