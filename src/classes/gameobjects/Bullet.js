export default class Bullet extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, `bullet`);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setScale(0.1);
  }
}
