

window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var ball;
function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(255,255,255)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  animate(); // Call to your animate function
}
// To do::
ball = {
  x : window.innerWidth/2,
  y : window.innerHeight/2,
  dx: 10,
  dy: 10,
  r : 25
}
//  1. Declare and init variables x, y, dx, dy, radius;

function animate(){
// 2. Draw a circle (arc method) and radius
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  ctx.strokeStyle = 'rgba(0,0,0)';
  ctx.fillStyle = 'rgba(0,0,0)';
  ctx.beginPath();
  ctx.arc(ball.x,ball.y, ball.r, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
  ball.y += ball.dy;
  ball.x += ball.dx;
  if(ball.x >= window.innerWidth + 25 || ball.x <= 25){
    ball.dx = ball.dx * -1;
  }else if (ball.y >= window.innerHeight + 25 || ball.y <= 25){
    ball.dy = ball.dy * -1;
  }
  requestAnimationFrame(animate);

// 3. Use conditions to change dx and dy when ball hits window edge

}
