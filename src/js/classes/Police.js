import GameObject from './GameObject.js';

export default class Enemy extends GameObject{
  constructor(x,y,image){
    super(x,y,image);
  }
  draw(ctx){
    ctx.save();
    //ctx.translate(this.location.x,this.location.y);

    //let angle = Math.atan2(this.velocity.y,this.velocity.x) - Math.PI/2;
    //ctx.rotate(angle);
    //ctx.drawImage(this.image, this.localFrameNr * this.size,0,this.size,this.size,-this.size/2,-this.size/2,this.size, this.size);
    //ctx.restore();
    ctx.fillStyle = `blue`;
    ctx.fillRect(x,y, 40,40);
    ctx.fill();
  }
}
