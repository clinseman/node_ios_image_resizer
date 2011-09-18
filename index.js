var findit = require('findit')
	 _ = require('underscore'),
	path = require('path'),
	argv = require('optimist').argv;

//console.log(argv.s)

if(argv.s === undefined){
	argv.s = '.';
}

var source = argv.s;

console.log('attempting to read dir: ' + source);
/*
fs.readdir(source, function(err, files){
	if(err) throw err;
	_.each(files, function(file){
		console.log('file: ' + file);
		
	})
});
*/

findit.find(source, function(file, stat){
	//console.log(file);
	if(path.extname(file).match(/\.png$/)){
		console.log(file);
	}
})