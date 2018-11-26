import {saveScore} from '../../functions/scores.js';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: 'gameover'
    });
  }
  init() {
    this.score = Phaser.Math.Between(100, 500);
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
    //
    this.createScoreSubmit();
    this.input.on('pointerdown', pointer => {
      const $name = document.querySelector(`.overlay__nameinput`).value;
      //Send score to backend
      saveScore($name, this.score).then(data => {
        if (data.result === `ok`) {
          console.log('Score is goed doorgestuurd');
          //html overlay onzichtbaar plaatsen
          const $input = document.querySelector(`.overlay`);
          $input.style.visibility = `hidden`;
          //ga naar scoreoverzicht scene
          this.scene.start(`scores`);
        } else {
          console.log('Score is NIET goed doorgestuurd');
        }
      });
    });
  }

  update() {}
}
