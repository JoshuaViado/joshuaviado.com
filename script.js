const email = document.querySelector(".icon");
const output = document.querySelector(".contacts-output");
const output2 = document.querySelector(".contacts-output2");

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
