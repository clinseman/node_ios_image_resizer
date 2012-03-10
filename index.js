var utils = require('./lib/utils');
var argv = require('optimist')
	.usage('Resize and copy images.\nUsage: $0 -s [source] -d [destination]')
	.demand(['s', 'd'])
	.alias('s', 'source')
	.describe('s', 'Source directory')
	.alias('d', 'destination')
	.describe('d', 'Destination directory')
	.argv;
	
var easyimg = require('easyimage');
var path = require('path');

var source = argv.s || '.';
var dest = argv.d || '.';

var dir2x = path.join(dest, '2x') + '/';
var dir1x = path.join(dest, '1x') + '/';

console.log('starting on directory: ' + source);

// create the destination directories (got to be a better way to do this)
utils.createDirSync(dest);
utils.createDirSync(dir2x);
utils.createDirSync(dir1x);

// for each image 
utils.findImageFiles(source, function(err, file){
	if(err) throw err;
		
	// copy it as is to the 2x directory and rename it
	utils.copyFile(source + file, dir2x + utils.create2xName(file), function(err, file){
		if(err) throw err;
		console.log('copied file: ' + file);
	});
	
	// and resize it by 50% and copy it to the 1x directory
			
	easyimg.resize({
	  src: source + file,
	  dst: dir1x + file,
	  width:   '50%',
	  height:   '50%'
	}, function(err, stdout, stderr){
	  if (err) throw err
	  console.log('resized 50%')
	});
})

