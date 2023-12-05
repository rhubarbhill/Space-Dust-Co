let aboutImg
let m02

function preload() {
  aboutImg = loadImage("about screen.png")
}

function setup() {
  createCanvas(800, 600)
  m02 = createButton('Go to Main Menu')
  m02.position(300, 550)
}

function draw() {
  background(220);

  image(aboutImg, 0, 0)
  m02.mousePressed(() => {move02()})
}

function move02() {
  location.assign("../02 Main Menu/index.html")
}