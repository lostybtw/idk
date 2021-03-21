var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

let playerz

let car1,car2,car3,car4;

let carz;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount == 4){
    game.update(1);
  }

  if(gameState == 1){
    game.play();
  }
}
