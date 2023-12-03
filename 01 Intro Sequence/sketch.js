let starImg, rocketImg, rocket, font_reg, theme, sd_green, big_logo, font
let lyric01, lyric01_, lyric02, lyric02_, lyric03, lyric03_, lyric04, lyric04_, lyric05, lyric05_, lyric06, lyric06_
let lyric07, lyric07_, lyric08, lyric08_, lyric09, lyric09_, lyric10, lyric10_, lyric11, lyric11_
let lyric14, lyric14_, lyric15, lyric15_, lyric16, lyric16_, lyric17, lyric17_, lyric18, lyric18_, lyric19, lyric19_
let lyric20, lyric20_, lyric21, lyric21_, lyric22, lyric22_, lyric23, lyric23_
let lyric24, lyric24_, lyric25, lyric25_, lyric26, lyric26_, lyric27, lyric27_, lyric28, lyric28_, lyric29, lyric29_
let lyric30, lyric30_, lyric31, lyric31_, lyric32, lyric32_, lyric33, lyric33_, lyric34, lyric34_, lyric35, lyric35_
let lyric36, lyric36_, lyric37, lyric37_, lyric38, lyric38_, lyric39, lyric39_, lyric40, lyric40_, lyric41, lyric41_ 
let lyric42, lyric42_, lyric43, lyric43_, lyric44, lyric44_, lyric45, lyric45_, lyric46, lyric46_, lyric47, lyric47_
let lyric48, lyric48_, lyric49, lyric49_, lyric50, lyric50_, lyric51, lyric51_, lyric52, lyric52_, lyric53, lyric53_
let lyric54, lyric54_, lyric55, lyric55_
let playerMode = false

function preload() {
  starImg = loadImage("art 01/white star.png")
  rocketImg = loadImage("art 01/rocket with fire.png")
  font_reg = loadFont("font/EffraStatic/Effra_Trial_Rg.ttf")
  theme = loadSound("sounds 01/01 Space Dust Co. Title Sequence.mp3")
  sd_green = loadImage("art 01/default green.png")

  big_logo = loadImage("art 01/big logo.png")
  font = loadFont("font/EffraStatic/Effra_Trial_Bd.ttf")

  lyric01 = loadImage("lyrics/lyric01.png")
  lyric02 = loadImage("lyrics/lyric02.png")
  lyric03 = loadImage("lyrics/lyric03.png")
  lyric04 = loadImage("lyrics/lyric04.png")
  lyric05 = loadImage("lyrics/lyric05.png")
  lyric06 = loadImage("lyrics/lyric06.png")
  lyric07 = loadImage("lyrics/lyric07.png")
  lyric08 = loadImage("lyrics/lyric08.png")
  lyric09 = loadImage("lyrics/lyric09.png")
  lyric10 = loadImage("lyrics/lyric10.png")
  lyric11 = loadImage("lyrics/lyric11.png")
  lyric14 = loadImage("lyrics/lyric14.png")
  lyric15 = loadImage("lyrics/lyric15.png")
  lyric16 = loadImage("lyrics/lyric16.png")
  lyric17 = loadImage("lyrics/lyric17.png")
  lyric18 = loadImage("lyrics/lyric18.png")
  lyric19 = loadImage("lyrics/lyric19.png")
  lyric20 = loadImage("lyrics/lyric20.png")
  lyric21 = loadImage("lyrics/lyric21.png")
  lyric22 = loadImage("lyrics/lyric22.png")
  lyric23 = loadImage("lyrics/lyric23.png")
  lyric24 = loadImage("lyrics/lyric24.png")
  lyric25 = loadImage("lyrics/lyric25.png")
  lyric26 = loadImage("lyrics/lyric26.png")
  lyric27 = loadImage("lyrics/lyric27.png")
  lyric28 = loadImage("lyrics/lyric28.png")
  lyric29 = loadImage("lyrics/lyric29.png")
  lyric30 = loadImage("lyrics/lyric30.png")
  lyric31 = loadImage("lyrics/lyric31.png")
  lyric32 = loadImage("lyrics/lyric32.png")
  lyric33 = loadImage("lyrics/lyric33.png")
  lyric34 = loadImage("lyrics/lyric34.png")
  lyric35 = loadImage("lyrics/lyric35.png")
  lyric36 = loadImage("lyrics/lyric36.png")
  lyric37 = loadImage("lyrics/lyric37.png")
  lyric38 = loadImage("lyrics/lyric38.png")
  lyric39 = loadImage("lyrics/lyric39.png")
  lyric40 = loadImage("lyrics/lyric40.png")
  lyric41 = loadImage("lyrics/lyric41.png")
  lyric42 = loadImage("lyrics/lyric42.png")
  lyric43 = loadImage("lyrics/lyric43.png")
  lyric44 = loadImage("lyrics/lyric44.png")
  lyric45 = loadImage("lyrics/lyric45.png")
  lyric46 = loadImage("lyrics/lyric46.png")
  lyric47 = loadImage("lyrics/lyric47.png")
  lyric48 = loadImage("lyrics/lyric48.png")
  lyric49 = loadImage("lyrics/lyric49.png")
  lyric50 = loadImage("lyrics/lyric50.png")
  lyric51 = loadImage("lyrics/lyric51.png")
  lyric52 = loadImage("lyrics/lyric52.png")
  lyric53 = loadImage("lyrics/lyric53.png")
  lyric54 = loadImage("lyrics/lyric54.png")
  lyric55 = loadImage("lyrics/lyric55.png")
  
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

  move() {
    this.y += this.speed
  }
}

class Thing {
  constructor(x, y, speed, image) {
    this.x = x
    this.y = y
    this.speed = speed
    this.image = image
  }

  display() {
    image(this.image, this.x, this.y, this.speed)
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
    this.x -= 5
  }

  moveRight() {
    this.x += 5
  }
}

class Lyric{
  constructor(x, y, width, height, image) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.image = image
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height)
  }
}

let stars = [];
let currentStar = 0;
let star_speed;
let genSpeed = 100;

function setup() {
  theme = loadSound("sounds 01/01 Space Dust Co. Title Sequence.mp3")
  createCanvas(800,600);
  star_speed = 1
  screen = new Thing(400, -300, 0, sd_green)
  rocket = new Rocket(380, 660) //y = 535
  big_logo = new Thing(400, 300, 0, big_logo)
  lyric01_ = new Lyric(400, 300, 800, 600, lyric01)
  lyric02_ = new Lyric(400, 300, 800, 600, lyric02)
  lyric03_ = new Lyric(400, 300, 800, 600, lyric03)
  lyric04_ = new Lyric(400, 300, 800, 600, lyric04)
  lyric05_ = new Lyric(400, 300, 800, 600, lyric05)
  lyric06_ = new Lyric(400, 300, 800, 600, lyric06)
  lyric07_ = new Lyric(400, 300, 800, 600, lyric07)
  lyric08_ = new Lyric(400, 300, 800, 600, lyric08)
  lyric09_ = new Lyric(400, 300, 800, 600, lyric09)
  lyric10_ = new Lyric(400, 300, 800, 600, lyric10)
  lyric11_ = new Lyric(400, 300, 800, 600, lyric11)
  lyric14_ = new Lyric(400, 300, 800, 600, lyric14)
  lyric15_ = new Lyric(400, 300, 800, 600, lyric15)
  lyric16_ = new Lyric(400, 300, 800, 600, lyric16)
  lyric17_ = new Lyric(400, 300, 800, 600, lyric17)
  lyric18_ = new Lyric(400, 300, 800, 600, lyric18)
  lyric19_ = new Lyric(400, 300, 800, 600, lyric19)
  lyric20_ = new Lyric(400, 300, 800, 600, lyric20)
  lyric21_ = new Lyric(400, 300, 800, 600, lyric21)
  lyric22_ = new Lyric(400, 300, 800, 600, lyric22)
  lyric23_ = new Lyric(400, 300, 800, 600, lyric23)
  lyric24_ = new Lyric(400, 300, 800, 600, lyric24)
  lyric25_ = new Lyric(400, 300, 800, 600, lyric25)
  lyric26_ = new Lyric(400, 300, 800, 600, lyric26)
  lyric27_ = new Lyric(400, 300, 800, 600, lyric27)
  lyric28_ = new Lyric(400, 300, 800, 600, lyric28)
  lyric29_ = new Lyric(400, 300, 800, 600, lyric29)
  lyric30_ = new Lyric(400, 300, 800, 600, lyric30)
  lyric31_ = new Lyric(400, 300, 800, 600, lyric31)
  lyric32_ = new Lyric(400, 300, 800, 600, lyric32)
  lyric33_ = new Lyric(400, 300, 800, 600, lyric33)
  lyric34_ = new Lyric(400, 300, 800, 600, lyric34)
  lyric35_ = new Lyric(400, 300, 800, 600, lyric35)
  lyric36_ = new Lyric(400, 300, 800, 600, lyric36)
  lyric37_ = new Lyric(400, 300, 800, 600, lyric37)
  lyric38_ = new Lyric(400, 300, 800, 600, lyric38)
  lyric39_ = new Lyric(400, 300, 800, 600, lyric39)
  lyric40_ = new Lyric(400, 300, 800, 600, lyric40)
  lyric41_ = new Lyric(400, 300, 800, 600, lyric41)
  lyric42_ = new Lyric(400, 300, 800, 600, lyric42)
  lyric43_ = new Lyric(400, 300, 800, 600, lyric43)
  lyric44_ = new Lyric(400, 300, 800, 600, lyric44)
  lyric45_ = new Lyric(400, 300, 800, 600, lyric45)
  lyric46_ = new Lyric(400, 300, 800, 600, lyric46)
  lyric47_ = new Lyric(400, 300, 800, 600, lyric47)
  lyric48_ = new Lyric(400, 300, 800, 600, lyric48)
  lyric49_ = new Lyric(400, 300, 800, 600, lyric49)
  lyric50_ = new Lyric(400, 300, 800, 600, lyric50)
  lyric51_ = new Lyric(400, 300, 800, 600, lyric51)
  lyric52_ = new Lyric(400, 300, 800, 600, lyric52)
  lyric53_ = new Lyric(400, 300, 800, 600, lyric53)
  lyric54_ = new Lyric(400, 300, 800, 600, lyric54)
  lyric55_ = new Lyric(400, 300, 800, 600, lyric55)
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
  if (clicked == true) {
    console.log(millis())
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
  rocket.display()
  frameRate(60)
  fill("white")
  textFont(font_reg)

  // debug: temporary to display x,y coords on screen
  let position = mouseX + " " + mouseY;

  fill(255);
  textSize(20);
  textFont(font);
  text(position, 15, 15);

  if (ms > 1200 && ms < 3600) {
    if (rocket.y > 520) {
      rocket.y -= 1.25
    }
  }

  if (ms > 3600) {
    playerMode = true
  }

  if (keyIsDown(LEFT_ARROW) && playerMode == true) {
    if (rocket.x > 0) {
      rocket.moveLeft()
    }
  }

  if (keyIsDown(RIGHT_ARROW) && playerMode == true) {
    if (rocket.x < width-5) {
      rocket.moveRight()
    }
  }

  for (let i = 0; i < stars.length; i++) {
    stars[i].display()
    stars[i].move()
  }

  if (ms > 3600 && ms < 42000) {
    starSpeed(ms, 5, stars)
  }

  if (ms > 3600 && ms < 7800) {
    lyric01_.display()
    //"In the year 2012, humans invented fast space travel."
  }

  if (ms > 7800 && ms < 12000) {
    lyric02_.display()
    //"The entire cosmos, unlocked to man."
  }

  if ((ms > 13200 && ms < 13800) || (ms > 14400 && ms < 15000) || (ms > 15600 && ms < 16200)) {
    lyric03_.display()
    //*Asteroid warning*
  }

  if (ms > 17400 && ms < 20250) {
    lyric04_.display()
    //"But space was not forgiving."
  }

  if (ms > 22200 && ms < 25050) {
    lyric05_.display()
    //"Humans needed comfort."
  }

  if (ms > 25050 && ms < 28200) {
    lyric06_.display()
    //"They needed to feel at home."
  }

  if (ms > 28200 && ms < 33000) {
    lyric07_.display()
    //"We needed a reminder."
  }

  if (ms > 33000 && ms < 36000) {
    lyric08_.display()
    //"We needed something to tell us..."
  }

  if (ms > 36000 && ms < 36600) {
    lyric09_.display()
    //"YOU'RE"
  }

  if (ms > 36600 && ms < 37200) {
    lyric10_.display()
    //"NOT"
  }

  if (ms > 37200 && ms < 40000) {
    lyric11_.display()
    //"ALONE"
  }

  if (ms > 42000 && ms < 46950) {
    starSpeed(ms, 8, stars)
  }

  if (ms > 42000 && ms < 44400) {
    lyric14_.display()
    //"ACTIVATING FAST SPACE TRAVEL"
    //"10"
  }

  if (ms > 44400 && ms < 46800) {
    lyric15_.display()
    //"9"
  }

  if (ms > 46800 && ms < 48000) {
    lyric16_.display()
    //"8"
  }

  if (ms > 48000 && ms < 49200) {
    lyric17_.display()
    //"7"
  }

  if (ms > 49200 && ms < 49800) {
    lyric18_.display()
    //"6"
  }

  if (ms > 49800 && ms < 50400) {
    lyric19_.display()
    //"5"
  }

  if (ms > 50400 && ms < 51000) {
    lyric20_.display()
    //"4"
  }

  if (ms > 51000 && ms < 51600) {
    lyric21_.display()
    //"3"
  }

  if (ms > 51600 && ms < 52800) {
    lyric22_.display()
    //"2"
  }

  if (ms > 52800 && ms < 54000) {
    lyric23_.display()
    //"1"
  }

  if (ms > 46950 && ms < 51500) {
    starSpeed(ms, 12, stars)
  }

  if (ms > 51500 && ms < 55800) {
    starSpeed(ms, 24, stars)
  }

  if (ms > 56000) { //New Screen Entry
    if (screen.y < 300) {
      screen.y += 20
    }
  }

  if (ms > 57000) {
    big_logo.display()
  }

  if (ms > 60000) {
    big_logo.y -= 3
  }

  if (ms > 60000 && ms < 91000) {
    starSpeed(ms, 8, stars)
  }

  if (ms > 62400 && ms < 67200) {
    lyric24_.display()
    //"Space Dust Company pioneered the concept of space hospitality!"
  }

  if (ms > 67200 && ms < 70800) {
    lyric25_.display()
    //"We're the reason your grandma isn't scared to board a spaceship!"
  }

  if (ms > 70800 && ms < 74100) {
    lyric26_.display()
    //"We offer a wide variety of astronomically good services!"
  }

  if (ms > 74100 && ms < 74700) {
    lyric27_.display()
    //"Hotels"
  }

  if (ms > 74700 && ms < 75300) {
    lyric28_.display()
    //"Asteroid Cleaning"
  }

  if (ms > 75300 && ms < 75900) {
    lyric29_.display()
    //"Delivery"
  }

  if (ms > 75900 && ms < 76800) {
    lyric30_.display()
    //"Concerts"
  }

  if (ms > 76800 && ms < 78000) {
    lyric31_.display()
    //"And healing stations for asteroid-damaged rockets!"
  }

  if (ms > 78000 && ms < 78900) {
    lyric32_.display()
    //"plus..."
  }

  if (ms > 78900 && ms < 79500) {
    lyric33_.display()
    //"Station Repairs"
  }

  if (ms > 79500 && ms < 80100) {
    lyric34_.display()
    //"Exhibitions"
  }

  if (ms > 80100 && ms < 80700) {
    lyric35_.display()
    //"Wi-Fi Satellites"
  }

  if (ms > 80700 && ms < 81600) {
    lyric36_.display()
    //"Restaurants"
  }

  if (ms > 81600 && ms < 82800) {
    lyric37_.display()
    //"We're the #1 rated service in the entire galaxy!"
  }

  if (ms > 82800 && ms < 85800) {
    lyric38_.display()
    //"(And #6 in the entire universe)"
  }

  if ((ms > 91000 && ms < 118200) || (ms > 122700 && ms < 133000)) {
    starSpeed(ms, 5, stars)
  }

  if (ms > 94000 && ms < 96600) {
    lyric39_.display()
    //"So if you're ever lost in the black"
  }

  if (ms > 96600 && ms < 99000) {
    lyric40_.display()
    //"And feeling blue..."
  }

  if (ms > 99000 && ms < 100200) {
    lyric41_.display()
    //"Just call"
  }

  if (ms > 100200 && ms < 103200) {
    lyric42_.display()
    //"SPACE DUST COMPANY"
  }

  if (ms > 103200 && ms < 108600) {
    lyric43_.display()
    //"You'll feel at home!"
  }

  if (ms > 108600 && ms < 109800) {
    lyric44_.display()
    //"Whether on"
  }

  if (ms > 109800 && ms < 113110) {
    lyric45_.display()
    //"MARS or MERCURY"
  }

  if (ms > 113110 && ms < 115200) {
    lyric46_.display()
    //We're on the clock!""
  }

  if (ms > 115200 && ms < 118200) {
    lyric47_.display()
    //"(Money-back guarantee!)"
  }

  if (ms > 118200 && ms < 122700) {
    lyric48_.display()
    //"So, if space feels too empty..."
  }

  if (ms > 122700 && ms < 123150) {
    lyric49_.display()
    //"WE'LL"
  }

  if (ms > 123150 && ms < 123600) {
    lyric50_.display()
    //"FILL"
  }

  if (ms > 123600 && ms < 124200) {
    lyric51_.display()
    //"THE"
  }

  if (ms > 124200 && ms < 127800) {
    lyric52_.display()
    //"VOID"
  }

  if (ms > 127800 && ms < 129000) {
    lyric53_.display()
    //"So go and call"
  }

  if (ms > 129000 && ms < 132300) {
    lyric54_.display()
    //"SPACE DUST COMPANY"
  }

  if (ms > 133650) {
    playerMode = false
    rocket.y -= 6
  }

  if (ms > 132300) {
    lyric55_.display()
    //"We'll be your rock!"
  }
}