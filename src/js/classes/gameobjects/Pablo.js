export default class Pablo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `pablo`);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setScale(0.08);
    this.setCollideWorldBounds(true);
  }
}
