import Phaser from '../lib/phaser.js'
import Batsman from '../GameObject/Batsman.js'

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game');
    }

    Batsman;

    preload()
    {
        this.load.image('PlayGround', 'assets/GameUI/Gameplay/GamePlayPortraitBG.jpg');
        this.load.image('Stumps', 'assets/GameUI/GamePlay/Stumps.png');
        this.load.image('ScoreBoard', 'assets/GameUI/GamePlay/ScoreBoard.png');
        this.load.image('BackButton', 'assets/GameUI/GamePlay/BackButton.png');
        this.load.image('SoundButton', 'assets/GameUI/GamePlay/SoundButton.png');
        this.load.image('ButtonsBg', 'assets/GameUI/GamePlay/ButtonsBg.png');
        this.load.image('HookShot', 'assets/GameUI/GamePlay/HookShotButton.png');
        this.load.image('DriveShot', 'assets/GameUI/GamePlay/DriveShotButton.png');
        this.load.image('CoverShot', 'assets/BatsmanThumnail/Batsman13.png');
        this.load.image('OffDrive', 'assets/BatsmanThumnail/Batsman2.png');
        this.load.spritesheet('Batsman', 'assets/Batsman/batsman.png', {frameWidth: 104, frameHeight: 204});
    }

    create()
    {
        this.add.image(240, 360,'PlayGround').setScale(0.4);
        this.add.image(240, 80, 'ScoreBoard').setScale(0.4);
        var BackButton = this.add.image(0, 60, 'BackButton').setScale(0.5).setOrigin(0, 0.5).setInteractive();
        BackButton.on('pointerdown', this.ShowMenu, this);
        this.add.image(480, 60, 'SoundButton').setScale(0.5).setOrigin(1, 0.5);
        this.add.image(240, 640, 'ButtonsBg').setScale(0.5);
        var hookShotBtn = this.add.image(60, 640, 'HookShot').setScale(0.5).setInteractive();
        hookShotBtn.on('pointerdown', this.hookShot, this);
        var driveShotBtn = this.add.image(180, 640, 'DriveShot').setScale(0.5).setInteractive();
        driveShotBtn.on('pointerdown', this.driveShot, this);
        var CoverShot = this.add.image(300, 640, 'CoverShot').setScale(0.5).setInteractive();
        CoverShot.on('pointerdown', this.driveShot, this);
        var offdrive = this.add.image(420, 640, 'OffDrive').setScale(0.5).setInteractive();
        offdrive.on('pointerdown', this.driveShot, this);
        
        this.Batsman = new Batsman(this,200, 420, 'Batsman');
        this.add.existing(this.Batsman);

        this.add.image(240, 495, 'Stumps').setScale(2);

        var idleconfig = {
            key: 'idle',
            frames: this.anims.generateFrameNumbers('Batsman', {start: 0, end: 24, first:0}),
            framerate: 10,
            repeat:-1
        }

        this.anims.create(idleconfig);

        var driveshotconfig = {
            key: 'driveshot',
            frames: this.anims.generateFrameNumbers('Batsman', {start: 25, end: 49, first: 49}),
            framerate: 10,
        }

        this.anims.create(driveshotconfig);

        var hookshotconfig = {
            key: 'hookshot',
            frames: this.anims.generateFrameNumbers('Batsman', {start: 50, end: 74, first: 74}),
            framerate: 10,
        }

        this.anims.create(hookshotconfig);

        this.Batsman.playAnim('idle');

    }


    hookShot()
    {
        this.Batsman.playAnim('driveshot');
    }

    driveShot()
    {
        this.Batsman.playAnim('driveshot');
    }

    ShowMenu()
    {
        this.scene.start('menu');
    }
}