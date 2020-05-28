let img;
let vid;
let theta = 0;

function setup() {
  createCanvas(1500, 800, WEBGL);
  song = loadSound('3.mp3');
  vid = createVideo(['test.mp4']);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

function draw() {
  background(0);
  orbitControl();
  translate(0, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  texture(vid);
  box(600);
  pop();
  translate(-600, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  pop();
  theta += 0.005;
}


