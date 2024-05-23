var screen = "MENU";

class Target {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  draw() {
    this.x += this.speed;

    // перевірити чи ціль вилеліла за межі екрану
    
    circle(this.x, this.y, 50);
  }
}

var targets = [];

function setup() {
  createCanvas(800, 600);

  targets.push(
    new Target(random(width), random(height), random(1, 5))
  );
}

function draw() {
  if (screen == "MENU") {
    background("lightblue");
    text("START GAME", 300, 300, stroke(5), textSize(30));
  }
  if (screen == "GAME") {
    background("lightblue");

    for (var i = 0; i < targets.length; i++){
      targets[i].draw();
    } 
  }
}

function mouseClicked() {
  if (screen == "MENU") {
    screen = "GAME";
  }
  if (screen == "GAME") {
    // перевірити mouseX, mouseY на потрапляння в якусь ціль
    // підрахунок балів
  }
}
