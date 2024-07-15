var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedButton = [];
var level = 0;
$(document).on("keydown", () => {
  if (level == 0) {
    nextSequence();
  }
});
function nextSequence() {
  userClickedButton = [];
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

  $(document).on("click", ".btn", function () {
    var userChosenColor = this.id;
    userClickedButton.push(userChosenColor);
    playSound(userChosenColor);
    $(`#${userChosenColor}`).addClass("pressed");

    setTimeout(() => {
      $(`#${userChosenColor}`).removeClass("pressed");
    }, 100);
    checkAnswer(userClickedButton.length - 1);
  });
  

function playSound(name) {
  var audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

function checkAnswer(currentLevel)
{
  if(userClickedButton[currentLevel] === gamePattern[currentLevel])
  {
    if(userClickedButton.length === gamePattern.length)
    {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  }
  else
  {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(()=>
    {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver()
{
  userClickedButton = [];
  gamePattern = [];
  level = 0;

}