// js is for the animation loop for the strokes
const textElement = document.getElementById("animatedText");
const textElement2 = document.getElementById("animatedText");

function restartAnimation() {
  textElement.style.transition = "none";
  textElement.style.strokeDashoffset = "0";

  setTimeout(() => {
    textElement.style.transition = "stroke-dashoffset 3s ease";
    textElement.style.strokeDashoffset = "1000";
  }, 50);
}

// Start de animatie direct en in een loop
restartAnimation();
setInterval(restartAnimation, 10000);