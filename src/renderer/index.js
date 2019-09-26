import './style.css';
import 'phaser';
import Game from './js/classes/Game.js';

const five = require('johnny-five');

{
  const init = () => {
    console.log(`GAME OPSTARTEN`);
    
    const board = new five.Board({
      repl: false
    });

    board.on("ready", () => {
      const button = new five.Button(12);

      window.game = {};
      window.game.button = button;

      new Game();
    });
  };

  init();
}
