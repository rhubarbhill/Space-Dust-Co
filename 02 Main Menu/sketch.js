let startImg, menu_screenImg, menuTheme
let font
let aboutBImg, playerBImg, aboutB, playerB
// let starImg, starA_, starP_
// let starA = false
// let starP = false
// ^ Part of an abandoned idea to have a sparkle over a button while hovering over it

function preload() {
  startImg = loadImage("art 02/click anywhere to start.png")
  menu_screenImg = loadImage("art 02/menu screen.png")
  menuTheme = loadSound("sounds 02/02 Space Dust Co. Waiting Room.mp3")
  font = loadFont("font/EffraStatic/Effra_Trial_Bd.ttf")
  aboutBImg = loadImage("art 02/about link.png")
  playerBImg = loadImage("art 02/music player link.png")

  starImg = loadImage("art 02/white star.png")
}

function setup() {
  createCanvas(800, 600); 
  aboutB = new Button(aboutBImg, 247, 419, 238, 138) //128, 350
  playerB = new Button(playerBImg, 555, 419, 238, 138) //436, 350
  // starA_ = new Star(starImg, 247, 419, 50, 50)
  // starP_ = new Star(starImg, 555, 419, 50, 50)
}

let clickState = false
let ms
let ms_i

function mouseClicked() {
  if (clickState == false) {
    menuTheme.loop()
    ms_i = millis()
    clickState = true
  }

  if (aboutB.isClickedOn() && ms > 500) {
    console.log("about")
    move04()
  } else if (playerB.isClickedOn() && ms > 500) {
    console.log("player")
    move03()
  }
}

function move03() {
  location.assign("../03 Music Player/index.html")
}

function move04() {
  location.assign("../04 About/index.html")
}

class Button {
  constructor(img, x, y, w, h, handler) {
    this.img = img
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.state = false;
    this.handler = handler;
  }

  display() {
    image(this.img, this.x, this.y, this.w, this.h)
  }

  isClickedOn() {
    if (dist(this.x, this.y, mouseX, mouseY) < this.w / 2) {
        console.log("test1")
        // if (this.img == aboutBImg) {
        //   starA = true
        //   console.log(starA)
        // }
        // if (this.img == playerBImg) {
        //   starP = true
        //   console.log(starP)
        // }
        return true;
    } else {
        return false;
    }
  }
}

class Star {
  constructor(image, x, y, w, h) {
    this.image = image
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }

  display() {
    image(this.image, this.x, this.y, this.w, this.h)
  }
}

function draw() {
  ms = millis() - ms_i
  background(0);

  imageMode(CENTER)

  if(clickState == false) {
    image(startImg, 400, 300)
  } else {
    image(menu_screenImg, 400, 300)
    aboutB.display()
    playerB.display()
    aboutB.isClickedOn()
    playerB.isClickedOn()

    // if (starA == true) {
    //   starA_.display()
    // }
    // if (starP == true) {
    //   starP_.display()
    // }
  }

  // debug: temporary to display x,y coords on screen
  let position = mouseX + " " + mouseY;

  fill(255);
  textSize(20);
  textFont(font);
  text(position, 15, 15);
}
