let bullet, wall;
let thickness, weight, speed;
let damage;

function setup() {
  createCanvas(1000, 500);

  thickness = Math.round(random(22, 83));
  weight = Math.round(random(30, 52));
  speed = Math.round(random(223, 321));

  damage = Math.round(((0.5 * weight * speed * speed) / (thickness * thickness * thickness)));

  bullet = createSprite(50, 250, 45, 4);
  wall = createSprite(900, 250, thickness, 250);

  console.log(weight, speed);

  wall.shapeColor = "white";
  // bullet.depth = wall.depth;
  // bullet.depth += 1;
  bullet.shapeColor = "white";
  bullet.velocityX = 30;
  console.log(damage);
}

function draw() {
  background("black");

  if (isTouching()) {
    bullet.velocityX = 0;
    bullet.x = 870;
    if (damage < 10) {
      wall.shapeColor = "green";
    }
    if (damage > 10 || damage === 10) {
      wall.shapeColor = "red";
    }
  }

  drawSprites();
}

function isTouching() {
  if (bullet.x - wall.x < wall.width / 2 + bullet.width / 2
    && wall.x - bullet.x < wall.width / 2 + bullet.width / 2
    && bullet.y - wall.y < wall.height / 2 + bullet.height / 2
    && wall.y - bullet.y < wall.height / 2 + bullet.height / 2) {
    return true;
  } else {
    return false;
  }
}