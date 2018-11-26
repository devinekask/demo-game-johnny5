import Pablo from '../gameobjects/Pablo.js';
import Bullet from '../gameobjects/Bullet.js';
import Police from '../gameobjects/Police.js';
import Civilian from '../gameobjects/Civilian.js';

let pablo;
const bullets = [];
let reticle;
const polices = [];
let police;
let score;
let scoreTextField;
let civilians = [];
let rect;

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
      `bg`
    );
    this.createPablo();
    this.createBullet();
    this.createScore();

    rect = new Phaser.Geom.Rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 68,
      1,
      1
    );
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
        const shootPoint = new Phaser.Geom.Rectangle(mousex, mousey, 1, 1);

        this.physics.moveToObject(this.bullet, shootPoint, 350);
        this.bullet.rotation = bulletAngle + - 0.1;
      },
      this
    );
  }

  createScore() {
    scoreTextField = this.add.text(120, 32, `0`, {
      fontSize: `32px`,
      fill: `white`
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
    //
    this.physics.moveToObject(this.police, rect, 100);

    this.physics.add.collider(
      this.pablo,
      polices,
      this.gameOverScreen,null,this
    );
    this.physics.add.collider(bullets, this.police, this.endPolice, null, this);
  }

  createCivilian(){
    this.civilian = new Civilian(
      this,
      this.sys.game.config.width,
      this.sys.game.config.height - 68,
    );
    civilians.push(this.civilian);
    this.physics.moveToObject(this.civilian, rect, 150);

    this.physics.add.collider(civilians, bullets, this.gameOverScreen, null, this);
  }

  gameOverScreen() {
    console.log('gameover');
    this.gameOver = true;
    const overlay = this.add.graphics();
    overlay.fillStyle(0x171717, 0.5);
    overlay.fillRect(
      0,
      0,
      this.sys.game.config.width,
      this.sys.game.config.height
    );
    this.scene.start('gameover');
    console.log('haha');
  }

  endPolice(bulletSprite, policeSprite) {
    polices.splice(policeSprite);
    policeSprite.destroy();
    bulletSprite.destroy();
    score += 10;
    scoreTextField.setText(`${score}`);
    console.log(this.score);
  }

  update() {
    if (!this.gameOver) {
      this.number = Math.random();
      const numberone = Math.random();
      if (numberone < 0.02) {
        this.createPolice(this.number);
      }
      if (score > 100){
        if(numberone < 0.008){
        this.createCivilian()
        let timer = this.time.addEvent({
          delay: 500,                // ms
          //callback: callback,
          //args: [],
          //callbackScope: thisArg,
          loop: true
      });
      console.log(timer.delay);
      ;}
      }
      console.log(polices.length);
    }
  }
}
