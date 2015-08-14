WIDTH = 600;
HEIGHT = 600;

var World = function(context){
	this.context = context;
	this.walkers = [];
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
	var w = new Walker(randRange(0, WIDTH), randRange(0, HEIGHT));
	this.walkers.push(w);
}

function randRange(min, max) {
	return Math.random() * (max - min) + min;
}