function JSVector(x, y){
  this.x = x;
  this.y = y;
}
Vector.prototype.add = function(vector){
  this.x += vector.x;
  this.y += vector.y;
}
Vector.prototype.addGetNew = function(vector){
  return new JSVector(this.x + vector.x,this.y + vector.y);
}
Vector.prototype.sub = function(vector){
  this.x -= vector.x;
  this.y -= vector.y;
}
Vector.prototype.subGetNew = function(vector){
  return new JSVector(this.x - vector.x, this.y- vector.y);
}
Vector.prototype.mult = function(vector){
  this.x *= vector.x;
  this.y *= vector.y;
}
Vector.prototype.div = function(vector){
  this.x /= vector.x;
  this.y /= vector.y;
}
Vector.prototype.copy = function(){
  return new JSVector(this.x,this.y);
}
Vector.prototype.setMag = function(){
  this.x = Math.cos(this.getDir) * this.getMag();
  this.y = Math.sin(this.getDir) * this.getMag();
}
Vector.prototype.getMag = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
Vector.prototype.getDir = function(){
  return Math.atan2(this.y,this.x);
}
Vector.prototype.setDir = function(angle){
  this.x = this.getMag * Math.cos(angle);
  this.y = this.getMag * Math.sin(angle);
}
Vector.prototype.normalize = function(){
  
  //this.divide(new JSVector(this.getMag(),this.getMag()))
}
Vector.prototype.lerp = function(){
  
}
Vector.prototype.limit = function(factor, maximum){
  if(Math.abs(this.x) > maximum){
    this.x *= factor;
  }
  if(Math.abs(this.y) > maximum){
    this.y *= factor;
  }
Vector.prototype.distance(vector){}
  this
  
}
Vector.prototype.angleBetween(vector){

}
