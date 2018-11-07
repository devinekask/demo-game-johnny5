import Vector from './classes/Vector.js';
import SmokeParticle from './classes/SmokeParticle.js';
import {loadImage, map} from './functions/lib.js';

const $canvas = document.querySelector(`#canvas`),
  ctx = $canvas.getContext('2d'),
  mouse = new Vector(0, 0);
let particles = [],
  smokeImg,
  wind = new Vector(0, -0.05);

const init = () => {
  loadImage(`images/smoke.png`)
    .then(img => smokeImg = img)
    .then(() => {
      $canvas.addEventListener(`mousemove`, mousemove);
      draw();
    });
};

const mousemove = event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
};

const draw = () => {
  ctx.fillStyle = `black`;
  ctx.fillRect(0, 0, $canvas.width, $canvas.height);

  particles.push(new SmokeParticle($canvas.width / 2, $canvas.height, smokeImg));

  wind.x = map(mouse.x, 0, $canvas.width, 0.2, -0.2);

  particles = particles.filter(particle => particle.isAlive);
  particles.forEach(particle => particle.applyForce(wind));
  particles.forEach(particle => particle.update());
  particles.forEach(particle => particle.draw(ctx));

  window.requestAnimationFrame(draw);
}

init();
