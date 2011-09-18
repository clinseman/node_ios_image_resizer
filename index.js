var findit = require('findit'),
	utils = require('./lib/utils'),
	fs = require('fs'),
	 _ = require('underscore')._,
	path = require('path'),
	argv = require('optimist').argv;

//console.log(argv.s)

if(argv.s === undefined){
	argv.s = '.';
}

var source = argv.s;

console.log('attempting to read dir: ' + source);

utils.findImageFiles(source, function(err, file){
	if(err) throw err;
	console.log(file);
})

/*
findit.find(source, function(file, stat){
	//console.log(file);
	if(path.extname(file).match(/\.png$/)){
		console.log(file);
	}
})
*/

/*
fs.readdir(source, function(err, files){
	if(err) throw err;
	_.each(files, function(file){
		if(path.extname(file).match(/\.png$/)){
			console.log("file: " + file);		
		}
	})
});
*/

