var philly = new Audio();
philly.src = "https://cdn.glitch.com/fa419486-c10f-4f12-bf62-aacd1e70bc21%2FBruce%20Springsteen%20-%20Streets%20Of%20Philadelphia.mp3?1512372770613";

function PlaySound() {
    if (philly.paused) {
      philly.play();
  }
  else {
      philly.pause();
  }
}