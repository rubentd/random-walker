var Walker = function(x, y, world){
	this.x = x;
	this.y = y;
	this.previousX = -1;
	this.previousY = -1;
	this.stepSize = 1;
	this.world = world;
};

Walker.prototype.step = function(context){
	context.fillStyle = "#ccc";
	context.fillRect(this.previousX - this.stepSize/2, this.previousY - this.stepSize/2, this.stepSize, this.stepSize);

	context.fillStyle = "black";
	context.fillRect(this.x - this.stepSize/2, this.y - this.stepSize/2, this.stepSize, this.stepSize);
	
	var stepX = randRange(-1, 1);
	var stepY = randRange(-1, 1);

	//Save previous state
	this.previousX = this.x;
	this.previousY = this.y;

	var futureX = this.x + stepX;
	if( futureX > 0 && futureX < this.world.width){
		this.x = futureX
	}

	var futureY = this.y + stepY;
	if(futureY > 0 && futureY < this.world.height){
		this.y = futureY;
	}
	

};

function randRange(min, max) {
	return Math.random() * (max - min) + min;
}