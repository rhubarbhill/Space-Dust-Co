let img

function preload() {
  img = loadImage("../rocket.png")
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  image(img, 50, 50)
}
