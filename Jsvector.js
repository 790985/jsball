function JSVector(x, y){
  this.x = x;
  this.y = y;
}
function add(vector){
  this.x += vector.x;
  this.y += vector.y;
}
function addGetNew(vector){
  return new JSVector(this.x + vector.x,this.y + vector.y);
}
function sub(vector){
  this.x -= vector.x;
  this.y -= vector.y;
}
function subGetNew(vector){
  return new JSVector(this.x - vector.x, this.y- vector.y);
}
function mult(vector){
  this.x *= vector.x;
  this.y *= vector.y;
}
function div(vector){
  this.x /= vector.x;
  this.y /= vector.y;
}
function copy(){
  return new JSVector(this.x,this.y);
}
function setMag(){
  
}
