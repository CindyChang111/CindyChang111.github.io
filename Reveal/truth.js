

var font = 'Copperplate';
var letter = 'ALIVE';

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);

  textFont(font);
  textAlign(CENTER, CENTER);
}

function mouseMoved() {
  clear();
  textSize((mouseX - width / 2) * 5 + 1);
  text(letter, width / 2, mouseY);
}

function mouseDragged() {
  textSize((mouseX - width / 2) * 5 + 1);
  text(letter, width / 2, mouseY);
}

function keyReleased() {
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyTyped() {
  letter = key;
}
