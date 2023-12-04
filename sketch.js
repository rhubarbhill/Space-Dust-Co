let button

function setup() {
  createCanvas(400, 400);
  button = createButton('click me');
  button.position(100, 100);
}

function move01() {
  location.assign("01 Intro Sequence/index.html")
}

function move02() {
  location.assign("02 Main Menu/index.html")
}

function move03() {
  location.assign("03 Music Player/index.html")
}

function move04() {
  location.assign("04 About/index.html")
}

// function mouseClicked() {
//   move()
// }

function draw() {
  background(220);
  move02() //Calling it right away just for convenience right now
  button.mousePressed(() => {move()})
}
