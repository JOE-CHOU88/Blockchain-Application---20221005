function setup() {
  createCanvas(600, 600);
  background(227, 225, 225);

  let xPos;
  let yPos;
  let randomWidth;
  let randomHeight;
  let randomStart;
  let randomEnd;
  let randomDiameter;
  let randomStrokeWeight;
  let randomRColor_stroke;
  let randomRColor_fill;
  let randomGColor_stroke;
  let randomGColor_fill;
  let randomBColor_stroke;
  let randomBColor_fill;

  let rectCount = random(1, 20);
  for (let i = 0; i < rectCount; i++) {
    randomness();
    strokeWeight(randomStrokeWeight);
    stroke(randomRColor_stroke, randomGColor_stroke, randomBColor_stroke);
    fill(randomRColor_fill, randomGColor_fill, randomBColor_fill);
    rect(xPos, yPos, randomWidth, randomHeight);

    randomness();
    strokeWeight(randomStrokeWeight);
    stroke(randomRColor_stroke, randomGColor_stroke, randomBColor_stroke);
    fill(randomRColor_fill, randomGColor_fill, randomBColor_fill);
    circle(xPos, yPos, randomDiameter);

    randomness();
    strokeWeight(randomStrokeWeight);
    stroke(randomRColor_stroke, randomGColor_stroke, randomBColor_stroke);
    fill(randomRColor_fill, randomGColor_fill, randomBColor_fill);
    ellipse(xPos, yPos, randomWidth, randomHeight);

    randomness();
    strokeWeight(randomStrokeWeight);
    stroke(randomRColor_stroke, randomGColor_stroke, randomBColor_stroke);
    fill(randomRColor_fill, randomGColor_fill, randomBColor_fill);
    arc(xPos, yPos, randomWidth, randomHeight, randomStart, randomEnd);
  }

  function randomness() {
    xPos = random(0, 600);
    yPos = random(0, 600);
    randomWidth = random(10, 200);
    randomHeight = random(10, 300);
    randomStart = random(0, 10);
    randomEnd = random(10, 20);
    randomDiameter = random(50, 100);
    randomStrokeWeight = random(0, 15);
    randomRColor_stroke = random(0, 255);
    randomRColor_fill = random(0, 255);
    randomGColor_stroke = random(0, 255);
    randomGColor_fill = random(0, 255);
    randomBColor_stroke = random(0, 255);
    randomBColor_fill = random(0, 255);
  }
}

function draw() {}
