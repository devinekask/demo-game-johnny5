export default class Police extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, number) {
    super(scene, x, y, `police`);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setScale(1);
    if (number < 0.5) {
      this.flipX = true;
    }
    this.createAnimations();
  }
  createAnimations() {
    this.scene.anims.create({
      key: `walk`,
      frames: this.scene.anims.generateFrameNumbers(`police`, {
        start: 0,
        end: 1
      }),
      frameRate: 6,
      repeat: - 1
    });
  }
}
