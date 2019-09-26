import Pablo from '../gameobjects/Pablo.js';
import Bullet from '../gameobjects/Bullet.js';
import Police from '../gameobjects/Police.js';
import Civilian from '../gameobjects/Civilian.js';

const bullets = [];
const polices = [];
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

    this.instructies = this.add.text(this.sys.game.config.width / 2-270, 300, `0`, {
      fontSize: `24px`,
      fill: `white`
    });

    this.instructies.setText(`Click anywhere on the screen to shoot!`);
  }


// Roep Pablo op
  createPablo() {
    this.pablo = new Pablo(
      this,
      this.sys.game.config.width / 2,
      this.sys.game.config.height
    );
  }
// Maak bullet aan
  createBullet() {
    this.onButtonPress = () => {
      this.instructies.destroy();
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
        this.sys.game.config.height - 180
      );
      bullets.push(this.bullet);
      const shootPoint = new Phaser.Geom.Rectangle(mousex, mousey, 1, 1);

      this.physics.moveToObject(this.bullet, shootPoint, 350);
      this.bullet.rotation = bulletAngle + - 1.8;

      const shot = this.sound.add('shot', {volume: 0.4});

      shot.play();
    };
    window.game.button.on('press', this.onButtonPress);
  }

  createScore() {
    scoreTextField = this.add.text(120, 32, `0`, {
      fontSize: `32px`,
      fill: `white`
    });
    score = 0;
  }
// Roep police op
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

    this.physics.moveToObject(this.police, rect, 100);

    this.physics.add.collider(
      this.pablo,
      this.police,
      this.gameOverScreen,null,this
    );
    this.physics.add.collider(bullets, this.police, this.endPolice, null, this);
  }
// Roep burger op
  createCivilian(number){
    if (this.number < 0.5) {
    this.civilian = new Civilian(
      this,
      0,
      this.sys.game.config.height - 68,
      this.number
    );
    } else {
      this.civilian = new Civilian(
        this,
        this.sys.game.config.width,
        this.sys.game.config.height - 68,
        this.number
      );
    }
    civilians.push(this.civilian);
    this.physics.moveToObject(this.civilian, rect, 150);

    this.physics.add.collider(civilians, bullets, this.gameOverScreen, null, this);
  }

  gameOverScreen() {

    const burgerscream = this.sound.add('burgerscream', {volume: 0.2});
    burgerscream.play();

    console.log('gameover');

    this.gameOver = true;
    this.scene.start('gameover');
    burgerscream.play();
  }

  endPolice(bulletSprite, policeSprite) {
    polices.splice(policeSprite);
    policeSprite.destroy();
    bulletSprite.destroy();
    score += 10;
    scoreTextField.setText(`${score}`);
    console.log(this.score);
    const poposcream = this.sound.add('poposcream', {volume: 0.2});
    poposcream.play();
  }

  update() {
    if (!this.gameOver) {
      this.number = Math.random();
      const numberone = Math.random();
      if (numberone < 0.02) {
        this.createPolice(this.number);
      }
      if (score > 800){
        if(numberone < 0.02){
          this.createCivilian(this.number);
          console.log('burger');
        } } else if (score > 400){
        if(numberone < 0.008){
          this.createCivilian(this.number);
          console.log('burger');
        }} else if (score > 100){
        if(numberone < 0.001){
        this.createCivilian(this.number);
        console.log('burger');
        };
      }
      console.log(polices.length);
    }
  }

  gameOverScreen() {
    console.log('gameover');
    window.game.button.off('press', this.onButtonPress);
    
    this.gameOver = true;
    const overlay = this.add.graphics();
    overlay.fillStyle(0x171717, 0.5);
    overlay.fillRect(
      0,
      0,
      this.sys.game.config.width,
      this.sys.game.config.height
    );
    this.scene.start('gameover', {gamescore: score});
  }
}
