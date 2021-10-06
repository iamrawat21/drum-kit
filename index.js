
//click selection

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonselect = this.innerHTML;
      makesound(buttonselect);

  });

}

//keypress selection
document.addEventListener("keypress" , function(event){

            makesound(event.key);
})

function makesound(key)
{
  switch (key) {
    case "w":
      var crash = new Audio("sound/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sound/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sound/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sound/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sound/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sound/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sound/tom-4.mp3");
      tom4.play();
      break;
    default:console.log(buttonselect);

  }

}
