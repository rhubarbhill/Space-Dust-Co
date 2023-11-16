let dust1
let wind1

//This code currently does not work
//Have decided to just abandon this idea for now

class PVector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class Dust {
  constructor(x, y, xspd, yspd, dia, ID) {
    this.x = x;
    this.y = y;
    this.xspd = xspd;
    this.yspd = yspd;
    this.dia = dia; //diameter
    this.rad = this.dia / 2; //radius
    this.m = this.rad * 0.1;
    this.ID = ID;

    this.position = new p5.Vector(this.x, this.y)
    this.velocity = new p5.Vector(this.xspd, this.yspd)
  }

  display() {
    fill(255)
    circle(this.position.x, this.position.y, this.dia)
    
    this.position.add(this.velocity)
  }

  checkWindCollision(other) {
    let distanceV = p5.Vector.sub(other.position, this.position)
    let distanceVmag = distanceV.mag()
    let minDistance = this.r + other.r

    if (distanceVmag < minDistance) {
      let distanceCorrection = (minDistance - distanceVmag) / 2.0
      let d = distanceV.copy();
      let correctionV = d.normalize().mult(distanceCorrection);
      other.position.add(correctionV);
      this.position.sub(correctionV);

      let theta = distanceV.heading();
      let sine = sin(theta);
      let cosine = cos(theta);

      let bTemp = [new p5.Vector(), new p5.Vector()]

      bTemp[1].x = cosine * distanceV.x + sine * distanceV.y
      bTemp[1].y = cosine * distanceV.y - sine * distanceV.x 

      let vTemp = [new p5.Vector(), new p5.Vector()];

      vTemp[0].x = cosine * this.velocity.x + sine * this.velocity.y;
      vTemp[0].y = cosine * this.velocity.y - sine * this.velocity.x;
      vTemp[1].x = cosine * other.velocity.x + sine * other.velocity.y;
      vTemp[1].y = cosine * other.velocity.y - sine * other.velocity.x;

      /* Now that velocities are rotated, you can use 1D
       conservation of momentum equations to calculate 
       the final this.velocity along the x-axis. */
      let vFinal = [new p5.Vector(), new p5.Vector()];

      // final rotated this.velocity for b[0]
      vFinal[0].x =
        ((this.m - other.m) * vTemp[0].x + 2 * other.m * vTemp[1].x) /
        (this.m + other.m);
      vFinal[0].y = vTemp[0].y;

      // final rotated this.velocity for b[0]
      vFinal[1].x =
        ((other.m - this.m) * vTemp[1].x + 2 * this.m * vTemp[0].x) /
        (this.m + other.m);
      vFinal[1].y = vTemp[1].y;

      // hack to avoid clumping
      bTemp[0].x += vFinal[0].x;
      bTemp[1].x += vFinal[1].x;

      /* Rotate ball this.positions and velocities back
       Reverse signs in trig expressions to rotate 
       in the opposite direction */
      // rotate balls
      let bFinal = [new p5.Vector(), new p5.Vector()];

      bFinal[0].x = cosine * bTemp[0].x - sine * bTemp[0].y;
      bFinal[0].y = cosine * bTemp[0].y + sine * bTemp[0].x;
      bFinal[1].x = cosine * bTemp[1].x - sine * bTemp[1].y;
      bFinal[1].y = cosine * bTemp[1].y + sine * bTemp[1].x;

      // update balls to screen this.position
      other.position.x = this.position.x + bFinal[1].x;
      other.position.y = this.position.y + bFinal[1].y;

      this.position.add(bFinal[0]);

      // update velocities
      this.velocity.x = cosine * vFinal[0].x - sine * vFinal[0].y;
      this.velocity.y = cosine * vFinal[0].y + sine * vFinal[0].x;
      other.velocity.x = cosine * vFinal[1].x - sine * vFinal[1].y;
      other.velocity.y = cosine * vFinal[1].y + sine * vFinal[1].x;
    }
  }
}

class Wind extends Dust {
  display() {
    fill('red')
    circle(this.pos.x, this.pos.y, this.dia)
    
    this.pos.add(this.vel)
  }
  // constructor(x, y, xspd, yspd, dia, ID) {
  //   this.x = x;
  //   this.y = y;
  //   this.xspd = xspd;
  //   this.yspd = yspd;
  //   this.dia = dia; //diameter
  //   this.rad = this.dia / 2; //radius
  //   this.ID = ID;

  //   this.pos = createVector(this.x, this.y)
  //   this.vel = createVector(this.xspd, this.yspd)
  // }

  // display() {
  //   fill('red')
  //   circle(this.pos.x, this.pos.y, this.dia)
    
  //   this.pos.add(this.vel)
  // }
}

let particles = []

function setup() {
  createCanvas(800, 800);
  particles = [new Dust(400, 400, 0, 0, 100, 1), new Wind(280, 400, 0, 0, 50, 2)]
  // dust1 = new Dust(400, 400, 0, 0, 100, 1)
  // wind1 = new Wind(280, 400, 0, 0, 50, 2)
}

function keyPressed() {
  if (key == 'a') {
    wind1.xspd += 0.1
  } else if (key == 'b') {
    wind1.xspd -= 0.1
  }
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display()
    p.checkWindCollision()
    particles[0].checkCollision(particles[1])
  }
}

