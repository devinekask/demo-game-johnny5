import Pablo from '../gameobjects/Pablo.js';
import Bullet from '../gameobjects/Bullet.js';
import Police from '../gameobjects/Police.js';

let pablo;
const bullets = [];
let reticle;
const polices = [];
let police;
let score;
let scoreTextField;

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
    this.createScore();
  }

  createPablo() {
    this.pablo = new Pablo(
      this,
      this.sys.game.config.width / 2,
      this.sys.game.config.height
    );
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

        this.bullet = new Bullet(
          this,
          this.sys.game.config.width / 2,
          this.sys.game.config.height - 100
        );
        bullets.push(this.bullet);
        const rect = new Phaser.Geom.Rectangle(mousex, mousey, 1, 1);

        this.physics.moveToObject(this.bullet, rect, 350);
        this.bullet.rotation = bulletAngle + - 0.1;
      },
      this
    );
  }

  createScore() {
    scoreTextField = this.add.text(16, 16, `Score: 0`, {
      fontSize: `32px`,
      fill: `#000`
    });
    score = 0;
  }

  createPolice(number) {
    if (this.number < 0.5) {
      this.police = new Police(
        this,
        this.sys.game.config.width,
        this.sys.game.config.height - 68,
        this.number
      );
    } else {
      this.police = new Police(
        this,
        0,
        this.sys.game.config.height - 68,
        this.number
      );
    }
    polices.push(this.police);
    //
    const rect = new Phaser.Geom.Rectangle(
      this.sys.game.config.width / 2 - 30,
      this.sys.game.config.height - 68,
      10,
      1
    );
    //
    this.physics.moveToObject(this.police, rect, 100);

    this.physics.add.overlap(this.pablo, polices, this.endGame);
    this.physics.add.collider(bullets, this.police, this.endPolice);
  }

  endGame() {
    console.log('GAME OVER');
    this.gameOver = true;
    //this.start('boot');
    this.physics.pause();
  }

  endPolice(bulletSprite, policeSprite) {
    console.log('Dead');
    polices.splice(policeSprite);
    policeSprite.destroy();
    bulletSprite.destroy();
    score += 10;
    scoreTextField.setText(`Score: ${score}`);
    console.log(this.score);
  }

  update() {
    this.number = Math.random();
    const numberone = Math.random();
    if (numberone < 0.02) {
      console.log('Enemy created');
      this.createPolice(this.number);
    }
    console.log(polices.length);
  }
}
