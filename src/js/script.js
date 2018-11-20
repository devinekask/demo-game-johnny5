import Pablo from "./classes/Pablo.js";

{
  const $canvas = document.querySelector(`#canvas`),
    ctx = $canvas.getContext(`2d`);

  let pablo;

  const init = () => {
    console.log("Canvas gelukt");
    draw();
  };

  const draw = () => {
    ctx.fillStyle = `red`;
    ctx.fillRect(0, 0, $canvas.width, $canvas.height);

    pablo = new Pablo($canvas.width / 2, $canvas.height - 50);
    pablo.draw(ctx);
  };
  init();
}
