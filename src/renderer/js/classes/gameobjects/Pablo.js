export default class Pablo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `pablo_right`);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setScale(1.2);
    this.setCollideWorldBounds(true);
  }
}
