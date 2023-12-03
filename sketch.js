let button

function setup() {
  createCanvas(400, 400);
  button = createButton('click me');
  button.position(100, 100);
}

function move() {
  location.assign("01 Intro Sequence/index.html")
}

// function mouseClicked() {
//   move()
// }

function draw() {
  background(220);
  move() //Calling it right away just for convenience right now
  button.mousePressed(() => {move()})
}
