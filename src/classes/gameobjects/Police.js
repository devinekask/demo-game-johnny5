export default class Police extends Phaser.GameObjects.Image {
  constructor(scene, x, y, number) {
    //
    super(scene, x, y, `police`);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    if (number < 0.5) {
      this.setScale(0.08);
    } else {
      this.setScale(- 0.08, 0.08);
    }
    //this.setBounce(1,Phaser.Math.FloatBetween(0.4,0.8));

    //
  }
}
