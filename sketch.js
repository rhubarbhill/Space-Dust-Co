let button

function setup() {
  createCanvas(400, 400);
  button = createButton('click me');
  button.position(100, 100);
}

function move() {
  location.assign("02 Main Menu/index.html")
}

// function mouseClicked() {
//   move()
// }

function draw() {
  background(220);
  button.mousePressed(() => {move()})
}
