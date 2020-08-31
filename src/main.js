import Phaser from './lib/phaser.js'
import Menu from './scenes/menu.js'
import Game from './scenes/game.js'

var game;

window.onload = function()
{
    var config = {
        type: Phaser.AUTO,
        scale: {
            parent: 'phaserGame',
            width: 480,
            height: 720
        },
        backgroundColor: '#000000',
        scene: [ Menu, Game]
    }
    game = new Phaser.Game(config);
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);
}

function resizeGame()
{
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}



