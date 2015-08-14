(function(){

	var INTERVAL = 30;

	$(document).ready( function(){

		var canvasContext = $('#world')[0].getContext('2d'),
			world = new World(canvasContext);

			for(var i = 0; i < 10; i++){
				world.addRandomWalker();
			}


		setInterval( function(){
			world.quantum();
		}, INTERVAL);

	});

}());
