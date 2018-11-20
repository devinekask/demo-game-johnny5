import Pablo from '../gameobjects/Pablo.js';
import Bullet from '../gameobjects/Bullet.js';
import Police from '../gameobjects/Police.js';

let pablo;
let bullet;
let reticle;
let polices;
let police;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
  }
  init() {
    this.gameOver = false;
  }
  preload() {}

  create() {
    this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      `sky`
    );
    this.createPablo();
    this.createBullet();
  }

  createPablo() {
    this.pablo = new Pablo(
      this,
      this.sys.game.config.width / 2,
      this.sys.game.config.height
    );
    this.physics.add.collider(this.pablo, this.platforms);
  }

  createBullet() {
    this.input.on(
      'pointerdown',
      function() {
        //this.score ++;
        const mousex = this.input.mousePointer.x;
        const mousey = this.input.mousePointer.y;
        let bulletAngle = this.pablo.rotation;

        bulletAngle = Phaser.Math.Angle.Between(
          this.sys.game.config.width / 2,
          this.sys.game.config.height / 2,
          mousex,
          mousey
        );

        const bullet = new Bullet(
          this,
          this.sys.game.config.width / 2,
          this.sys.game.config.height - 100
        );

        const rect = new Phaser.Geom.Rectangle(mousex, mousey, 1, 1);

        this.physics.moveToObject(bullet, rect, 350);

        bullet.rotation = bulletAngle + - 0.1;
      },
      this
    );
  }

  createPolice() {
    if (Math.random() < 0.5) {
      const police = new Police(
        this,
        this.sys.game.config.width,
        this.sys.game.config.height - 68
      );
      const rect = new Phaser.Geom.Rectangle(
        this.sys.game.config.width / 2,
        this.sys.game.config.height - 68,
        1,
        1
      );
      return police;
    } else {
      const police = new Police(this, 0, this.sys.game.config.height - 68);
      const rect = new Phaser.Geom.Rectangle(
        this.sys.game.config.width / 2,
        this.sys.game.config.height - 68,
        1,
        1
      );
      return police;
    }
    this.physics.moveToObject(police, rect, 200);
  }

  update() {
    const number = Math.random();
    if (number < 0.02) {
      console.log('Enemy created');
      this.createPolice();
    }
  }
}
