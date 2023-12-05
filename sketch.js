let big_logo_img

function preload() {
  big_logo_img = loadImage("./art/big logo.png")
}

function setup() {
  createCanvas(800, 600);
  m01 = createButton('Go to Intro Sequence');
  m01.position(300, 410);
  m02 = createButton('Go to Main Menu');
  m02.position(300, 450);
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
  background(0);
  image(big_logo_img, 0, 0)
  m01.mousePressed(() => {move01()})
  m02.mousePressed(() => {move02()})
}
