export default class PreloadScene extends Phaser.Scene{

  constructor(){
    super({
      key: `preload`
    });
  }
  preload(){
    this.preloader = this.add.graphics();
    this.load.on(`progress`, this.onProgress, this);
    this.load.on(`complete`, this.onComplete, this);
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image(`pablo`, `./assets/pablo.png`);
    this.load.image(`bg`, `./assets/bg.png`);
    this.load.image(`civilian`, `./assets/civilian.png`);
    this.load.image(`gameover_img`, `./assets/gameover.png`);


    this.load.spritesheet(`police`,`./assets/sprites/police.png`,{frameWidth:82, frameHeight:101});

    // MUSIC
    this.load.audio('menu', './assets/audio/menu.mp3');
    this.load.audio('shot', './assets/audio/shot.mp3');
    this.load.audio('poposcream', './assets/audio/poposcream.mp3');
    this.load.audio('burgerscream', './assets/audio/burgerscream.mp3');

  }

  onProgress(value){
    console.log(`Loading: ${Math.round(value*100)}%`)
    this.preloader.clear();
    this.preloader.fillStyle(0xFF0000,1);
    this.preloader.fillRect(0,this.game.config.height/2,this.game.config.width * value, 5);
  }

  onComplete(){

    // MUSIC
    const menu = this.sound.add('menu');

    menu.play();

    this.preloader.destroy();
    this.scene.start(`game`);
  }

  create(){

  }
  update(){

  }
}

