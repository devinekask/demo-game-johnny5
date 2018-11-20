export default class BootScene extends Phaser.Scene{
  constructor(){
    super({
      key: `boot`
    });
    console.log(`In de Bootscene`);
  }
  preload(){
    console.log(`preload van de bootscene`);
    //Maybe load a preloader graphic...
  }
  create(){
    console.log(`create van de bootscene`);
    this.scene.start(`preload`);
  }
  update(){

  }

}
