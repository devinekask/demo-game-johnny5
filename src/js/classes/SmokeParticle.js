import Particle from './Particle.js';

export default class SmokeParticle extends Particle {
  constructor(x, y, image) {
    super(x, y);
    this.image = image;
  }
  draw(ctx) {
    ctx.globalAlpha = this.lifespan / 100;
    ctx.drawImage(this.image, this.location.x, this.location.y);
  }
}
