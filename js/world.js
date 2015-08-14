WIDTH = 600;
HEIGHT = 600;

var World = function(context){
	this.context = context;
	this.walkers = [];
	this.width = WIDTH;
	this.height = WIDTH;
}

World.prototype.quantum = function(){
	var self = this;
	this.walkers.forEach(function(w){
		w.step(self.context);
	});

}

World.prototype.addWalker = function(walker){
	this.walkers.push(walker);
}

World.prototype.addWalker = function(walker){
	this.walkers.push(walker);
}

World.prototype.addRandomWalker = function(){
	var color = getRandomColor();
	var w = new Walker(color, randRange(0, this.width), randRange(0, this.height), this);
	this.walkers.push(w);
}

function randRange(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomColor(){
	var palette = ['#3b5998', '#55acee', '#ff9900', '#146eb4', '#fcb314', '#d5641c', '#dd4b39'];
	return palette[randRange(0, palette.length - 1)];
}