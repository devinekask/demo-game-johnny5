import Vector from "./Vector.js";

export default class Pablo extends Vector {
  constructor(x, y) {
    super(x, y);
    this.location = new Vector(x, y);

    //this.frameRate = 20;
    //this.numFrames = 3;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = `white`;
    ctx.arc(this.location.x, this.location.y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}
