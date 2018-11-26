import './../../../assets/btn.png';
import './../../../assets/titlescreen.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`
    });
    console.log(`In de Bootscene`);
  }
  preload() {
    this.load.image(`titlescreen`, `./assets/titlescreen.png`);
    this.load.image(`button`, `./assets/btn.png`);
  }
  create() {
    this.bg = this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      `titlescreen`
    );
    this.btn = this.add.image(this.sys.game.config.width / 2, 500, `button`);
    this.input.once(
      'pointerdown',
      function() {
        console.log('click');

        this.scene.start('preload');
      },
      this
    );
  }

  update() {}
}
