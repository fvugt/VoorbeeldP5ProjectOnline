let vakje1 = 2;
let speler = 1;

function setup() {
  createCanvas(800, 800);
  let button = createButton("test");
  button.hide();
}

function draw() {
  background(220);
  if (vakje1 == 0){
    fill("white");
  }
  else if (vakje1 == 1){
    fill("blue");
  }
  else if (vakje1 == 2){
    fill("red");
  }
  rect(300,300,200,200);

  fill("black");
  text("Vakje1: " + vakje1, 20,20);
  text("Speler: " + speler, 20,40);
}

function mouseClicked(){
  vakje1 = speler;
  if (speler == 1){
    speler = 2;
  }
  else if (speler == 2){
    speler = 1;
  }
}