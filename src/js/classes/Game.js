import BootScene from './scenes/BootScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import HighScores from './scenes/HighScores.js';
import GameScene from './scenes/GameScene.js';
import GameOverScene from './scenes/GameOverScene.js';

class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      title: `Pablo Escobar`,
      scene: [BootScene, PreloadScene, GameScene, GameOverScene, HighScores],
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
