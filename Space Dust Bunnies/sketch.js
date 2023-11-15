let dust1

function setup() {
  createCanvas(800, 800);
  dust1 = new Dust(50, 50, 3, 0, 0)
}

function draw() {
  background(0);
  dust1.display()
}

class Dust {
  constructor(x, y, d, xspd, yspd) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.xspd = xspd;
    this.yspd = yspd;
    //this.handler = handler
  }

  display() {
    this.d = 3
    fill(255)
    circle(this.x, this.y, this.d)
    this.x += this.xspd;
    this.y += this.yspd;
  }
}