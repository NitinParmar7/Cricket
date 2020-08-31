import Phaser from '../lib/Phaser.js';

export default class Batsman extends Phaser.GameObjects.Sprite
{

    constructor(scene, x, y , texture)
    {
        super(scene, x, y, texture);
        
    }

    playAnim(animName)
    {
        this.anims.stop();
        this.anims.play(animName);
        console.log('Playing: ' + animName);
    }


}