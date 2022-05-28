for (i = 0; i < document.querySelectorAll(".animal").length; i++) {
  document
    .querySelectorAll(".animal")
    [i].addEventListener("click", function () {
      var buttonHTML = this.innerHTML;
      produceSound(buttonHTML);
      buttonPressAnimation(buttonHTML);
    });
}

document.addEventListener("keypress", function (event) {
  produceSound(event.key);
  buttonPressAnimation(event.key);
});

function produceSound(key) {
  switch (key) {
    case "l":
      var audio = new Audio("sounds/lionGrowl.wav");
      audio.play();

      break;

    case "m":
      var audio = new Audio("sounds/monkeySound.mp3");
      audio.play();

      break;

    case "w":
      var audio = new Audio("sounds/wolfHowl.wav");
      audio.play();

      break;

    case "d":
      var audio = new Audio("sounds/dolphin-laugh-sound.mp3");
      audio.play();

      break;

    case "e":
      var audio = new Audio("sounds/elephantBellow.mp3");
      audio.play();

      break;

    case "c":
      var audio = new Audio("sounds/catMeow.mp3");
      audio.play();

      break;

    case "p":
      var audio = new Audio("sounds/pigSnort.mp3");
      audio.play();

      break;

    default:
      console.log(buttonHTML);
      break;
  }
}

function buttonPressAnimation(currentKey) {
  var pressedButton = document.querySelector("." + currentKey);

  pressedButton.classList.add("pressed");

  setTimeout(function () {
    pressedButton.classList.remove("pressed");
  }, 200);
}
