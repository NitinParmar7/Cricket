import Phaser from '../lib/phaser.js'


export default class Menu extends Phaser.Scene
{

    constructor()
    {
        super('menu')
    }


    preload()
    {
        this.load.image('MenuBG', 'Assets/GameUI/Menu/MenuBg.jpg');
        this.load.image('Title', 'Assets/GameUI/Menu/Title.png');
        this.load.image('Play', 'Assets/GameUI/Menu/PlayBtn.png');
        this.load.image('ShowVideo', 'Assets/GameUI/Menu/WatchVideoBtn.png')
        this.load.image('Sound', 'Assets/GameUI/Menu/SoundBtn.png');
        this.load.image('Leaderboard', 'Assets/GameUI/Menu/LeaderboardBtn.png');
        this.load.image('ButtonBg', 'Assets/GameUI/Menu/ButtonBg.png');
    }

    create()
    {
        this.add.image(0, 0, 'MenuBG').setOrigin(0,0).setDisplaySize(480, 720);
        this.add.image(240, 240, 'Title').setScale(0.35);
        var playBtn = this.add.image(240, 540, 'Play').setScale(0.5).setInteractive();

        playBtn.on('pointerdown', function (event) {
            this.scene.start('game');
        }, this);

        this.add.image(240, 640, 'ButtonBg').setScale(0.5);
        this.add.image(0, 645, 'ShowVideo').setOrigin(0, 0.5).setScale(0.5);
        this.add.image(480, 645, 'Sound').setOrigin(1, 0.5).setScale(0.5);
        this.add.image(480, 40, 'Leaderboard').setOrigin(1, 0.5).setScale(0.5);
    }


}