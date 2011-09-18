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

var dir2x = '2x/';
var dir1x = '1x/';

console.log('starting on directory: ' + source);

utils.createDirSync(dest + dir2x);
utils.createDirSync(dest + dir1x);


utils.findImageFiles(source, function(err, file){
	if(err) throw err;
	
	utils.copyFile(source + file, dest + dir2x + utils.create2xName(file), function(err, file){
		if(err) throw err;
		console.log('copied file: ' + file);
	});
	
	gm(source + file)
		.resize(50, 50, '%')
		.write(dest + dir1x + file, function(err){
			if(err) throw err;
			console.log('resized file: ' + dest + dir1x + file);
			//console.log(this.outname);	
		});
})

