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
$(".drum").click(clickSound);

// Pass key name to whichSound when clicked on
function clickSound (e) {
   whichSound(e.target.textContent);
}

// Play the sound corresponding to key
function playSound (soundfile) {
   var audio = new Audio("sounds/" + soundfile + ".mp3");
   audio.play();
}

function whichSound (keyPressed) {
   
   switch (keyPressed) {
      case "w":
         playSound(order[0]);
         break;

      case "a":
         playSound(order[1]);
         break;

      case "s":
         playSound(order[2]);
         break;

      case "d":
         playSound(order[3]);
         break;

      case "j":
         playSound(order[4]);
         break;

      case "k":
         playSound(order[5]);
         break;

      case "l":
         playSound(order[6]);
         break;

      default:
         console.log(keyPressed);

   }
   
}

// Add event for clicking each button
//
// Function for choosing which sound to play (used by both keydown and click event)
//
// Animate buttons
