let img

function setup() {
  createCanvas(800, 800); 
  img = loadImage("../art/rocket.png")
}

function draw() {
  background(0);

  image(img, 50, 50)
}
