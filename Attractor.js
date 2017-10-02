function Attractor(loc, vel, acc, len){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = "rgb(" + Math.floor(Math.random() * (255 - 0 + 1))+","+Math.floor(Math.random()*(255-0+1))+","+Math.floor(Math.random()*(255 - 0 + 1)) + ")";
}
Attractor.prototype.update = function(){
  this.loc.add(this.vel);
  if(this.loc.x >= window.innerWidth || this.loc.x <=0){
    this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight || this.loc.y <= 0){
    this.vel.y *= -1;
  }
  if(this.loc.y >= 400 || this.loc.x >= 400){
    this.loc.add(new JSVector(10,-10));
  }

}
  this.render();
}

Attractor.prototype.render = function(){
  ctx.fillstyle = 'rgba(255,200,0)'; //this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y,this.len,Math.PI*2,0,false);
  ctx.stroke();
  ctx.fill();
}
