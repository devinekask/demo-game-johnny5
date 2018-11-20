export default class Pablo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `pablo`);
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(0.08);
    //this.setBounce(1,Phaser.Math.FloatBetween(0.4,0.8));
    this.setCollideWorldBounds(true);
    //
    this.createAnimations();
  }
  createAnimations() {
    this.scene.anims.create({
      key: `still`,
      frames: [{key: `pablo`, frames: 1}],
      frameRate: 30
    });
  }
}
