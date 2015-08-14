(function(){

	var INTERVAL = 5;

	$(document).ready( function(){

		var canvasContext = $('#world')[0].getContext('2d'),
			world = new World(canvasContext);

			world.addRandomWalker();
			world.addRandomWalker();
			world.addRandomWalker();
			world.addRandomWalker();

		setInterval( function(){
			world.quantum();
		}, INTERVAL);

	});

}());
