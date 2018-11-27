import {saveScore} from '../../functions/scores.js';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: 'gameover'
    });
  }
  init(data) {
    this.score = data.gamescore;
  }

  preload() {}

  createScoreSubmit() {
    const $input = document.querySelector(`.overlay`);
    $input.style.visibility = `visible`;
    $input.querySelector(`.overlay__nameinput`).value = ``;
    $input.querySelector(`.overlay__nameinput`).focus();
  }

  create() {
    this.bghs = this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      `gameover_img`
    );
    this.name = this.add.text(this.sys.game.config.width / 2 - 205, 470, `0`, {
      fontSize: `24px`,
      fill: `white`
    });
    this.name.setText(`Write Your Name and Hit Enter`);
    this.name.setShadow(0, 0, `black`, 5);
    this.createScoreSubmit();
    this.input.keyboard.on('keydown_' + 'ENTER', pointer => {
      const $name = document.querySelector(`.overlay__nameinput`).value;
      saveScore($name, this.score).then(data => {
        if (data.result === `ok`) {
          console.log('Score is goed doorgestuurd');
          const $input = document.querySelector(`.overlay`);
          $input.style.visibility = `hidden`;
          this.scene.start(`scores`);
        } else {
          console.log('Score is NIET goed doorgestuurd');
        }
      });
    });
  }
  update() {}
}
