var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedButton = [];
var level = 0;

function nextSequence() {
  level++;
  $("#level-title").text(`Level ${level}`)
  var randomNum = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).addClass("pressed");

  setTimeout(() => {
    $(`#${randomChosenColor}`).removeClass("pressed");
  }, 100);
  playSound(randomChosenColor);
}
$(document).on("keydown", () => {
  if (level == 0) {
    nextSequence();
  }
});
$(document).ready(function () {
  $(document).on("click", "[id]", function () {
    var userChosenColor = this.id;
    userClickedButton.push(userChosenColor);
    playSound(userChosenColor);
    $(`#${userChosenColor}`).addClass("pressed");

    setTimeout(() => {
      $(`#${userChosenColor}`).removeClass("pressed");
    }, 100);
  });
});

function playSound(name) {
  var audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}
