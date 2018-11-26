export default class Civilian extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    //
    super(scene, x, y, `civilian`);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setScale(0.08);
    //this.setCollideWorldBounds(true);

    //
    // if (number > 0.5) {
    //   this.flipX = true;
    // }
  }
}
