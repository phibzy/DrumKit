// Array to determine button order
var order = [
         "crash",
         "kick-bass",
         "snare",
         "tom-1",
         "tom-2",
         "tom-3",
         "tom-4"
      ]

// Add click event to all drum icons
// Use textContent from event of button click to choose sound
$(".drum").click( e => { whichSound(e.target.textContent) });

// Add keypress event, grab name of key from event and send to whichSound
$(document).keypress( e => { whichSound(e.key) });

// Play the sound corresponding to key
function playSound (soundfile, button) {
   var audio = new Audio("sounds/" + soundfile + ".mp3");
   audio.play();
   playAnimation(button);
}

// Play animation corresponding to key
function playAnimation (button) {
   // Button art we want to animate
   var selectedButton = $("." + button)

   // Delay in milliseconds
   var delay = 100;

   selectedButton.addClass("pressed");
   setTimeout( function () {
      selectedButton.removeClass("pressed");   
   }, delay);

}

// Choose which sound to play based on key/button text
function whichSound (keyPressed) {
   
   switch (keyPressed) {
      case "w":
         playSound(order[0], keyPressed);
         break;

      case "a":
         playSound(order[1], keyPressed);
         break;

      case "s":
         playSound(order[2], keyPressed);
         break;

      case "d":
         playSound(order[3], keyPressed);
         break;

      case "j":
         playSound(order[4], keyPressed);
         break;

      case "k":
         playSound(order[5], keyPressed);
         break;

      case "l":
         playSound(order[6], keyPressed);
         break;

      default:
         console.log(keyPressed);
   }
}
