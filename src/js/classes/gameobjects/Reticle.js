export default class Reticle {
  constructor(scene, x, y) {
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    // Pointer lock will only work after mousedown
    /*this.input.keyboard.on(
      'keydown_Q',
      function(event) {
        if (this.input.mouse.locked) this.input.mouse.releasePointerLock();
      },
      0,
      this
    );
    // Move reticle upon locked pointer move
    this.input.on(
      'pointermove',
      function(pointer) {
        if (this.input.mouse.locked) {
          reticle.x += pointer.movementX;
          reticle.y += pointer.movementY;
        }
      },
      this
    );
  }*/
  }
}
