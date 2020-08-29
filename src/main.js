import Phaser from './lib/phaser.js'
import Game from './scenes/game.js'

export default new Phaser.Game ({
    type: Phaser.AUTO,
    width: 1080,
    height: 1920,
    scene: Game
})

