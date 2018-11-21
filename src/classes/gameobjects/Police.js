export default class Police extends Phaser.GameObjects.Image {
  constructor(scene, x, y, number) {
    //
    super(scene, x, y, `police`);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setScale(0.08);
    //
    if (number < 0.5) {
    } else {
      this.flipX = true;
    }
  }
}
