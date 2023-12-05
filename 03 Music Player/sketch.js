let screenImg
let playImg, pauseImg
let song01, song02, song03, song04, song05, song06, song07, song08, song09, song10, song11, song12
let tracks = []
let starImg, rocketImg
let m02

function preload() {
  screenImg = loadImage("art 03/music player.png")
  playImg = loadImage("art 03/play music.png")
  pauseImg = loadImage("art 03/pause music.png")
  starImg = loadImage("art 03/white star.png")
  rocketImg = loadImage("art 03/rocket with fire.png")


  font = loadFont("font/EffraStatic/Effra_Trial_Bd.ttf")




  song01 = loadSound("sounds 03/01 Space Dust Co. Title Sequence.mp3")
  song02 = loadSound("sounds 03/02 Space Dust Co. Waiting Room.mp3")
  song03 = loadSound("sounds 03/03 Space Invader!.mp3")
  song04 = loadSound("sounds 03/04 Electric Spider Bite v2.mp3")
  song05 = loadSound("sounds 03/05 Orbital Ferris Wheel.mp3")
  song06 = loadSound("sounds 03/06 Camp Atmos Rising Fires.mp3")
  song07 = loadSound("sounds 03/07 V.I.P..mp3")
  song08 = loadSound("sounds 03/08 Black Hole Blues.mp3")
  song09 = loadSound("sounds 03/09 Space Dust Bunnies.mp3")
  song10 = loadSound("sounds 03/10 Wichita Lineman.mp3")
  song11 = loadSound("sounds 03/11 All of Me.mp3")
  song12 = loadSound("sounds 03/12 In Memory of a Star.mp3")

  m02 = createButton('<-----')
  m02.position(0, 579)
}

class Song {
  constructor(x, y, w, h, image, audio, name, speed, handler) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.image = image
    this.audio = audio
    this.name = name
    this.speed = speed

    this.state = false
    this.handler = handler
  }

  display() {
    image(this.image, this.x, this.y, this.w, this.h)
    textFont(font)
    text(this.name, this.x + 20, this.y+7)

    if (this.state) {
      this.image = pauseImg
    } else {
      this.image = playImg
    }
  }

  isClickedOn() {
    if (dist(this.x, this.y, mouseX, mouseY) < this.w / 2) {
        console.log("test1")
        // this.audio.play()
        this.state = !this.state;
        // if (this.handler) {
        //     this.handler();
        // }
        return true;
    } else {
        return false;
    }
  }

  handleIt() {
      if (this.handler) {
          this.handler()
      }
  }
}

// let song_playing = false
let current_song
let current_song_name = "Choose a song!"

function mousePressed() {
  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].isClickedOn()) {
      tracks[i].handleIt();

      if (!tracks[i].audio.isPlaying()) {
        tracks[i].audio.loop()
        current_song = tracks[i]
        current_song_name = tracks[i].name
        star_speed = tracks[i].speed
        // song_playing = true
      } else if (tracks[i].audio.isPlaying()) {
        tracks[i].audio.pause()
        // song_playing = false
      }
    }
  }
}

class Star {
  constructor(x, y, speed) {
    this.x = random(600, width-5)
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

function setup() {
  createCanvas(800, 600);

  track01 = new Song(18, 162, 25, 25, playImg, song01, "Space Dust Co. Title Theme", 5)
  track02 = new Song(18, 196, 25, 25, playImg, song02, "Space Dust Co. Waiting Room", 2)
  track03 = new Song(18, 230, 25, 25, playImg, song03, "Space Invader!", 9)
  track04 = new Song(18, 264, 25, 25, playImg, song04, "Electric Spider Bite", 20)
  track05 = new Song(18, 298, 25, 25, playImg, song05, "Orbital Ferris Wheel", 4)
  track06 = new Song(18, 332, 25, 25, playImg, song06, "Camp Atmos / Rising Fires", 1)
  track07 = new Song(18, 366, 25, 25, playImg, song07, "V.I.P.", 7)
  track08 = new Song(18, 400, 25, 25, playImg, song08, "Black Hole Blues", 6)
  track09 = new Song(18, 434, 25, 25, playImg, song09, "Space Dust Bunnies", 2)
  track10 = new Song(18, 468, 25, 25, playImg, song10, "Wichita Lineman", 5)
  track11 = new Song(18, 502, 25, 25, playImg, song11, "All of Me", 3)
  track12 = new Song(18, 536, 25, 25, playImg, song12, "In Memory of a Star", 6)

  tracks.push(track01, track02, track03, track04, track05, track06, track07, track08, track09, track10, track11, track12)
}

let stars = [];
let currentStar = 0;
let star_speed = 2;
let genSpeed = 100;

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
  background(0);
  imageMode(CENTER)
  image(rocketImg, 700, 395, 47, 102)
  for (let i = 0; i < stars.length; i++) {
    stars[i].display()
    stars[i].move()
  }
  image(screenImg, 400, 300)
  textFont(font);

  tracks.forEach(function (element) {
    element.display();
  });
  
  starSpeed(millis(), star_speed, stars)
  
  textSize(40)
  text(current_song_name, 15, 125)

  // track01.display()

  //debugging
  // let position = mouseX + " " + mouseY;
  fill(255);
  textSize(20);
  // text(position, 15, 15);

  m02.mousePressed(() => {move02()})
}

function move02() {
  location.assign("../02 Main Menu/index.html")
}
