import { getScores } from '../../functions/scores';
import './../../../assets/HighscoreScreen.png';
import './../../../assets/btn_again.png';


export default class HighScores extends Phaser.Scene {
  constructor() {
    super({
      key: 'scores'
    });
  }
  preload() {
    this.load.image(`bghs`, `./assets/HighscoreScreen.png`);
    this.load.image(`button_again`, `./assets/btn_again.png`);
  }
  create() {
    this.bghs = this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      `bghs`
    );

    getScores().then(data => {
      this.createcreateScoreFields(data);
    });

    this.btn = this.add.image(this.sys.game.config.width / 2, 500, `button_again`);
    this.input.once(
      'pointerdown',
      function() {
        console.log('click');

        this.scene.start('game');
      },
      this
    );
  }
  createcreateScoreFields(data) {
    const x = this.sys.game.config.width / 2;
    let y = 190;
    data.forEach(player => {
      this.add
        .text(x, y, `${player.name} - ${player.score}`, { color: `#ffffff`, fontSize: `16px`})
        .setOrigin(0.5, 0.5);
      y += 20;
    });
  }
  update() {}
}
