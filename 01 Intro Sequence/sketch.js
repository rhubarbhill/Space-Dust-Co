let starImg, rocketImg, font_reg
let rand_x
let theme
let rocket
let sd_green

function preload() {
  starImg = loadImage("art 01/white star.png")
  rocketImg = loadImage("art 01/rocket with fire.png")
  font_reg = loadFont("font/EffraStatic/Effra_Trial_Rg.ttf")
  theme = loadSound("sounds 01/01 Space Dust Co. Title Sequence.mp3")
  sd_green = loadImage("art 01/default green.png")
}

class Star {
  constructor(x, y, speed) {
    this.x = random(width-5)
    this.y = 0 
    this.speed = speed
  }

  display() {
    image(starImg, this.x, this.y, 10, 10)
  }

  screen() {  
    image(sd_green, this.x, this.y, 800, 600)
  }

  move() {
    this.y += this.speed
  }
}

class Screen {
  constructor(x, y, speed) {
    this.x = x
    this.y = y
    this.speed = speed
  }

  display() {
    image(sd_green, this.x, this.y, this.speed)
  }

  move() {
    this.y += this.speed
  }
}

class Rocket {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  display() {
    image(rocketImg, this.x, this.y, 47, 102)
  }

  moveLeft() {
    this.x -= 3
  }

  moveRight() {
    this.x += 3
  }
}

function starMaker(x, speed) {
  let random_x = random(5,785)
  falling_star = new Star(x, 20, speed)
  // falling_star.move()
  // falling_star.display()
}

let stars = [];
let currentStar = 0;
let star_speed;
let s_i = 0;
let genSpeed = 100;

let counter = 0;

function increment() {
  counter++
}

function setup() {
  theme = loadSound("sounds 01/01 Space Dust Co. Title Sequence.mp3")
  createCanvas(800,600);
  rand_x = random(5,785)
  star_speed = 1
  
  // falling_star_x = new Star(20, 40, 1)
  screen = new Screen(400, -300)
  // imageMode(CORNER)
  rocket = new Rocket(380, 535)

  setInterval(increment, genSpeed)
  
  // for (let i = 0; i < 500; i++) {
  //   stars.push(new Star(random(width-5), 0, star_speed))
  // }
}

let random_n

function starFall(array) {
  array[random_n].move()
  array[random_n].display()
}

function print_som() {
  console.log("som")
}

let clicked = false;

let startTime
let ms_i

function mouseClicked() {
  if (clicked == false) {
    console.log("clicked")
    ms_i = millis()
    console.log(ms_i)
    theme.play()
    clicked = true
  }
}

function starSpeed(ms_var, star_speed, array) {
  star_speed = star_speed
  for (let i = 0; i < array.length; i++) {
      array[i].speed = star_speed
    }
  if (ms_var > genSpeed){
    array[currentStar] = new Star(random(width-5), 0, star_speed)
    currentStar++
    genSpeed+=100
  }
}

function draw() {
  ms = millis() - ms_i
  background(0);
  screen.display()
  imageMode(CENTER)
  // image(rocketImg, 380, 535, 47, 102)
  rocket.display()
  frameRate(60)
  fill("white")

  // debug: temporary to display x,y coords on screen
  let position = mouseX + " " + mouseY;
  fill(255);
  textSize(20);
  textFont("Helvetica");
  text(position, 15, 15);

  //falling_star_x.move()
  //falling_star_x.display()

  if (keyIsDown(LEFT_ARROW)) {
    rocket.moveLeft()
    console.log("down")
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rocket.moveRight()
    console.log("down")
  }

  for (let i = 0; i < stars.length; i++) {
    stars[i].display()
    stars[i].move()
  }

  // textFont(font_reg)
  // textSize(100)
  // text("test", 500, 500)

  // if (ms > 3600 && ms < 42000) {
  // star_speed = 5
  // for (let i = 0; i < stars.length; i++) {
  //     stars[i].speed = 5
  //   }
  // if (ms > genSpeed){
  //   stars[currentStar] = new Star(random(width-5), 0, star_speed)
  //   currentStar++
  //   genSpeed+=100
  // }
  // }

  if (ms > 3600 && ms < 42000) {
    starSpeed(ms, 5, stars)
  }

  // if (ms > 42000 && ms < 46950) {
  //   star_speed = 8
  //   for (let i = 0; i < stars.length; i++) {
  //     stars[i].speed = 8
  //   }
  //   if (ms > genSpeed){
  //     stars[currentStar] = new Star(random(width-5), 0, star_speed)
  //     currentStar++
  //     genSpeed+=100
  //   }
  //   }

  if (ms > 42000 && ms < 46950) {
    starSpeed(ms, 8, stars)
  }
  
  // if (ms > 46950 && ms < 51500) {
  //   star_speed = 12
  //   for (let i = 0; i < stars.length; i++) {
  //     stars[i].speed = 12
  //   }
  //   if (ms > genSpeed){
  //     stars[currentStar] = new Star(random(width-5), 0, star_speed)
  //     currentStar++
  //     genSpeed+=100
  //   }
  //   }

  if (ms > 46950 && ms < 51500) {
    starSpeed(ms, 12, stars)
  }

  if (ms > 56000) { //New Screen Entry
    if (screen.y < 300) {
      screen.y += 20
    }
  }
}

// setInterval(print_som, genSpeed)