let starImg, rocketImg, font_reg

function preload() {
  starImg = loadImage("art 01/white star.png")
  rocketImg = loadImage("art 01/rocket with fire.png")
  font_reg = loadFont("font/EffraStatic/Effra_Trial_Rg.ttf")
}

function setup() {
  createCanvas(800,600);
}




function draw() {
  background(0);
  image(starImg, 200, 200, 10, 10)
  image(rocketImg, 400, 400, 47, 102)
  fill("white")
  textFont(font_reg)
  textSize(100)
  text("test", 500, 500)
}
