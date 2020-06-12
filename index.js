// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick(){
//   alert("I got clicked");
// }

function playAudioBasedOnInputChar(char) {
  switch (char) {
    case "w":
      new Audio('sounds/tom-1.mp3').play();
      break;
    case "a":
      new Audio('sounds/tom-2.mp3').play();
      break;
    case "s":
      new Audio('sounds/tom-3.mp3').play();
      break;
    case "d":
      new Audio('sounds/tom-4.mp3').play();
      break;
    case "j":
      new Audio('sounds/snare.mp3').play();
      break;
    case "k":
      new Audio('sounds/crash.mp3').play();
      break;
    case "l":
      new Audio('sounds/kick-bass.mp3').play();
      break;
    default:
      console.log(char);
  }
}

var drumButtonList = document.querySelectorAll("button.drum");

for (var i = 0; i < drumButtonList.length; i++) {
  drumButtonList[i].addEventListener("click", function() {
    // this.style.color = "White";
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    playAudioBasedOnInputChar(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(e) {
  var keyPressed = e.key;
  // console.log(e);
  buttonAnimation(keyPressed);
  playAudioBasedOnInputChar(keyPressed);
});

function buttonAnimation(char) {
  var activeButton = document.querySelector("." + char);
  // activeButton.className += " pressed";
  activeButton.classList.add("pressed");
  console.log(activeButton.className, activeButton.classList);
  //set time out does not block
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
