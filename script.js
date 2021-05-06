const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let paint = false;
function startpaint() {
  paint = true;
  draw(e);
}
function stoppaint() {
  paint = false;
  ctx.beginPath();
}
function draw(e) {
  if (paint) {
    ctx.lineWidth = size;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
}

let size = 10;
let color = '#000000';
document.querySelector('.check').addEventListener('click', function () {
  let inp = document.querySelector('.guess').value;
  size = Number(inp);
});
document.querySelector('.chec').addEventListener('click', function () {
  color = document.querySelector('.colo').value;
});

canvas.addEventListener('mousedown', startpaint);
canvas.addEventListener('mouseup', stoppaint);
canvas.addEventListener('mousemove', draw);
