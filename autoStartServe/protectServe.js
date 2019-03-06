const fork = require('child_process').fork;

let startApp = function(path){
	let worker = fork(path);
	worker.on('exit', function(){
		console.log('worker:' + worker.pid + 'exited');
		startApp(path);
	});
}

startApp('./app.js');