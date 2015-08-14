var Walker = function(color, x, y, world){
	this.color = color || '#ccc';
	this.x = x;
	this.y = y;
	this.previousX = -1;
	this.previousY = -1;
	this.stepSize = 1;
	this.world = world;
	this.direction = {x : 0, y : 1};
};

Walker.prototype.step = function(context){
	
	context.fillStyle = this.color;
	context.fillRect(this.x - this.stepSize/2, this.y - this.stepSize/2, this.stepSize, this.stepSize);

	//Should I turn left or right? 90% chance of not turning
	var r = randRange(0, 20);
	if(r == 0){ //turn left
		this.rotate(-45); 
	}else if(r == 1){ //turn right
		this.rotate(45);
	}else{
		this.go();
	}

};

//Advance in direction of direction vector
Walker.prototype.go = function(){
	var futureX = this.x + this.direction.x;
	if( futureX > 0 && futureX < this.world.width){
		this.x = futureX
	}

	var futureY = this.y + this.direction.y;
	if(futureY > 0 && futureY < this.world.height){
		this.y = futureY;
	}
}

//Vector rotations
Walker.prototype.rotate = function(deg){
	var alpha = deg2rad(deg);
	cs = Math.cos(alpha);
	sn = Math.sin(alpha);
	var initX = this.direction.x;
	var initY = this.direction.y;
	this.direction.x = initX * cs - initY * sn;
	this.direction.y = initX * sn + initY * cs;
};
//End vector rotations

function randRange(min, max) {
	 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function deg2rad(angle) {
  return angle * .017453292519943295; // (angle / 180) * Math.PI;
}