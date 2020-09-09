// Sets order for each sound/image file
// Change element order to change sound/key combinations - will need to edit css separately
var soundNames = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];
  
// Add key press event listener to entire document - we just monitor the keyboard
document.addEventListener("keydown", e => { soundKeys(e.key) });

// Adds click event to all drum buttons using loop
var buttons = document.querySelectorAll(".drum");
var i = 0;

while (i < buttons.length) {
   buttons[i].addEventListener("click", soundKeys.bind(null, buttons[i].textContent));
   i++;
}

// Chooses which sound to play based on which drum clicked/which key pressed 
function soundKeys(keyPressed) {

   switch (keyPressed) {
      case "w":
         playSound(keyPressed, soundNames[0]);
         break;

      case "a":
         playSound(keyPressed, soundNames[1]);
         break;

      case "s":
         playSound(keyPressed, soundNames[2]);
         break;

      case "d":
         playSound(keyPressed, soundNames[3]);
         break;

      case "j":
         playSound(keyPressed, soundNames[4]);
         break;

      case "k":
         playSound(keyPressed, soundNames[5]);
         break;

      case "l":
         playSound(keyPressed, soundNames[6]);
         break;

      // If user presses something random, just return it to console
      default:
         console.log(keyPressed);

   }
}

// Plays sound file corresponding to key
function playSound(key, drumSound) {
   var path = "sounds/";
   var audio = new Audio(path + drumSound + ".mp3");

   audio.play();
   playAnimation(key);
}

// Plays animation for drum image element - done by adding/removing "pressed" html class
function playAnimation(keyPressed) {
   // Set how many milliseconds delay you want for animation (default 100)
   var delay = 100;
   var buttonElement = document.querySelector("." + keyPressed);
   
   buttonElement.classList.add("pressed");

   // Remove pressed class after a delay
   setTimeout( function () {
      buttonElement.classList.remove("pressed");
   }, delay);
}

