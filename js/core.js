
//The game will be displayed in the gameDiv HTML element, and will take a 800x600 space
var oeswGame = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');
//All game states
oeswGame.state.add("MainState", mainState);
//Initial state
oeswGame.state.start("MainState");

