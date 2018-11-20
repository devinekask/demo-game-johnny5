import BootScene from './scenes/BootScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import GameScene from './scenes/GameScene.js';

class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      title: `Pablo Escobar`,
      scene: [BootScene, PreloadScene, GameScene],
      version: `1.0`,
      physics: {
        default: `arcade`,
        arcade: {
          gravity: {y: 0},
          debug: false
        }
      }
    });
    console.log(`Constructor Game class`);
  }
}
export default Game;
