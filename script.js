document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("main");
  const ctx = canvas.getContext("2d");
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let brushSize = 5;
  let color = "black";

  function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  function changeColor(newColor) {
    color = newColor;
  }

  function erase() {
    color = "#ffffff"; // white color for eraser
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  document.getElementById("slider").addEventListener("input", () => {
    brushSize = document.getElementById("slider").value;
    document.getElementById("brushSize").textContent = brushSize;
  });

  document.getElementById("new").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  document.getElementById("erase").addEventListener("click", erase);
  document
    .getElementById("black")
    .addEventListener("click", () => changeColor("black"));
  document
    .getElementById("pink")
    .addEventListener("click", () => changeColor("#F50057"));
  document
    .getElementById("blue")
    .addEventListener("click", () => changeColor("#2979FF"));
  document
    .getElementById("yellow")
    .addEventListener("click", () => changeColor("#FFD600"));
});
