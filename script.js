const profile = document.getElementsByClassName("profile-container");
var text = document.querySelector(".profile-text");
var hiText = document.querySelector(".typing");
const email = document.querySelector(".icon");
const output = document.querySelector(".contacts-output");
const output2 = document.querySelector(".contacts-output2");

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

function profileHover() {
  profile.style.animation = "profile 0.7s";
}

function textAppear() {
  text.style.opacity = "1";
  console.log("opacity 1");
}

function contactsClicked(name) {
  if (name === "email") {
    output.innerHTML = "joshua.viado96@outlook.com";
    output2.innerHTML = "email";
  }

  switch (name) {
    case "email":
      output.innerHTML = "joshua.viado96@outlook.com";
      output2.innerHTML = "email";
      break;
    case "phone":
      output.innerHTML = "+44 7818456254";
      output2.innerHTML = "mobile";
  }
}

email.addEventListener("onmouseover", contactsClicked);

//hiText.addEventListener("webkitAnimationEnd", textAppear);
//hiText.addEventListener("animationend", textAppear);
