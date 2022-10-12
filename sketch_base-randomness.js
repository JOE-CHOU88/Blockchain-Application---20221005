function setup() {
  createCanvas(600, 600);
  background(227, 225, 225);

  let randomShape = floor(random(0, 4));
  let isBlackBackground = false;
  let isNoStroke = false;
  let isNoFill = false;

  if ((background_random = random(0, 1)) <= 0.5) {
    console.log("background_random: " + background_random);
    background(0, 0, 0);
    isBlackBackground = true;
  } else {
    console.log("background_random: " + background_random);
  }

  if ((stroke_random = random(0, 1)) <= 0.5) {
    console.log("stroke_random: " + stroke_random);
    isNoStroke = true;
  } else {
    console.log("stroke_random: " + stroke_random);
  }

  if ((fill_random = random(0, 1)) <= 0.5) {
    console.log("fill_random: " + fill_random);
    isNoFill = true;
  } else {
    console.log("fill_random: " + fill_random);
  }

  let rectCount = random(10, 100);
  for (let i = 0; i < rectCount; i++) {
    let xPos = random(0, 600);
    let yPos = random(0, 600);
    let randomWidth = random(10, 200);
    let randomHeight = random(10, 300);
    let randomStart = random(0, 10);
    let randomEnd = random(10, 20);
    let randomDiameter = random(50, 100);
    let randomStrokeWeight = random(0, 15);
    let randomRColor = random(0, 255);
    let randomGColor = random(0, 255);
    let randomBColor = random(0, 255);

    if (isNoStroke == true) {
      noStroke();
    }
    if (isNoFill == true) {
      noFill();
    }

    // blendMode(ADD)
    // blendMode(MULTIPLY)

    if (randomShape == 0) {
      strokeWeight(randomStrokeWeight + random(-10, 10));
      stroke(
        randomRColor + random(-30, 30),
        randomGColor + random(-30, 30),
        randomBColor + random(-30, 30)
      );
      fill(
        randomRColor + random(-30, 30),
        randomGColor + random(-30, 30),
        randomBColor + random(-30, 30)
      );
      rect(
        xPos + random(-50, 50),
        yPos + random(-50, 50),
        randomWidth + random(-10, 10),
        randomHeight + random(-10, 10)
      );
    } else if (randomShape == 1) {
      strokeWeight(randomStrokeWeight + random(-10, 10));
      stroke(
        randomRColor + random(-30, 30),
        randomGColor + random(-30, 30),
        randomBColor + random(-30, 30)
      );
      fill(
        randomRColor + random(-30, 30),
        randomGColor + random(-30, 30),
        randomBColor + random(-30, 30)
      );
      circle(
        xPos + random(-50, 50),
        yPos + random(-50, 50),
        randomDiameter + random(-10, 10)
      );
    } else if (randomShape == 2) {
      strokeWeight(randomStrokeWeight + random(-10, 10));
      stroke(
        randomRColor + random(-30, 30),
        randomGColor + random(-30, 30),
        randomBColor + random(-30, 30)
      );
      fill(
        randomRColor + random(-30, 30),
        randomGColor + random(-30, 30),
        randomBColor + random(-30, 30)
      );
      ellipse(
        xPos + random(-50, 50),
        yPos + random(-50, 50),
        randomWidth + random(-10, 10),
        randomHeight + random(-10, 10)
      );
    } else if (randomShape == 3) {
      strokeWeight(randomStrokeWeight);
      stroke(
        randomRColor + random(-30, 30),
        randomGColor + random(-30, 30),
        randomBColor + random(-30, 30)
      );
      fill(
        randomRColor + random(-30, 30),
        randomGColor + random(-30, 30),
        randomBColor + random(-30, 30)
      );
      arc(
        xPos + random(-50, 50),
        yPos + random(-50, 50),
        randomWidth,
        randomHeight,
        randomStart + random(-5, 5),
        randomEnd + random(-5, 5)
      );
    }
  }
}

function draw() {}
