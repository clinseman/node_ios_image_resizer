var fs = require('fs');
var utils = require('./lib/utils');
var _ = require('underscore')._;
var argv = require('optimist')
	.usage('Resize and copy images.\nUsage: $0 -s [source] -d [destination]')
	.demand(['s', 'd'])
	.alias('s', 'source')
	.describe('s', 'Source directory')
	.alias('d', 'destination')
	.describe('d', 'Destination directory')
	.argv;
var gm = require('gm');

var source = argv.s || '.';
var dest = '/Users/clinseman/Public/resized/';

console.log('attempting to read dir: ' + source);

utils.findImageFiles(source, function(err, file){
	if(err) throw err;
	
	//console.log(source + file);
	/*
	gm(source + file).size(function(err, size){
		if(err) throw err;
		console.log(size);
	})
	*/
	
	fs.readFile(source + file, function(err, data){
		if(err) throw err;
		fs.writeFile(dest + '_' + file, data, function(err){
			if(err) throw err;
			console.log('It\'s saved!');
		})
	});
	
	gm(source + file)
		.resize(50, 50, '%')
		.write(dest + file, function(err){
			if(err) throw err;
			console.log(this.outname);	
		});
	
})

