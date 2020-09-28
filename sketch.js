var database;
var playerCount = 0;
var gameState = 0;
var form, game;
var player, allPlayers;
var car1, car2, car3, car4
var cars = []
var carImage1, carImage2, carImage3, carImage4;
var track;

function preload() {
    carImage1 = loadImage("images/car1.png")
    carImage2 = loadImage("images/car2.png")
    carImage3 = loadImage("images/car3.png")
    carImage4 = loadImage("images/car4.png")

    track = loadImage("images/track.jpg")
}

function setup(){
    createCanvas(windowWidth - 20,windowHeight- 10);
    
    database = firebase.database()

    game = new Game()
    game.getGameState();
    game.updateGameState(0);
    game.start();
}

function draw(){
    background("#c68767")
    if(playerCount == 4) {
        game.updateGameState(1)
    }
    if(gameState == 1) {
        game.play();
    }
    if(gameState == 2) {
        game.end();
    }
}

