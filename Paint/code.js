const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

let painting, color, lineWidth, difX, difY;

canvas.addEventListener("mousedown", (e) => {
  difX = e.clientX - dif.left;
  difY = e.clientY - dif.top;
  painting = true;
  color = document.getElementById("color").value;
  lineWidth = document.getElementById("lw").value;
  ctx.beginPath();
});
canvas.addEventListener("mousemove", (e) => {
  if (painting) {
    dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
    difX = e.clientX - difX.left;
    difY = e.clientY - difY.top;
  }
});
canvas.addEventListener("mouseup", (e) => {
  ctx.closePath();
  painting = false;
});
const dibujar = (x1, y1, x2, y2) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};
