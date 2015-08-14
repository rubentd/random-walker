var Walker = function(x, y){
	this.x = x;
	this.y = y;
	this.previousX = -1;
	this.previousY = -1;
	this.stepSize = 1;
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

	this.x += stepX;
	this.y -= stepY;
	

};

function randRange(min, max) {
	return Math.random() * (max - min) + min;
}