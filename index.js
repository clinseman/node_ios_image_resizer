var utils = require('./lib/utils');
var easyimg = require('easyimage');
var path = require('path');
var file = require('file');
var argv = require('optimist')
	.usage('Resize and copy images.\nUsage: $0 -s [source]')
	.demand(['s'])
	.alias('s', 'source')
	.describe('s', 'Source directory')
	.argv;
	
var filesToIgnore = ['.DS_Store'];
var extensionsValid = ['.png', '.jpg'];

var source = argv.s || '.';

console.log('starting on directory: ' + source);

file.walk(source, function (err, dirPath, dirs, files) {
	if(err) throw err;
	
	var dirname = path.basename(dirPath);
	
	if (dirname == 'iOS') {
		return;
	}
	
	for (var i=0; i<files.length; i++) {
	
		var file = files[i];

		var filename = path.basename(file);	
		var extname = path.extname(file);	
		var basename = path.basename(file, extname);	
		var dirname = path.dirname(file);	

		if (!filesToIgnore.contains(basename) && extensionsValid.contains(extname)) {
			
			console.log('found file: ' + basename);
		
			utils.createDirSync(dirname + '/iOS');
			
			utils.copyFile(file, dirname + '/iOS/' + basename + '@2x.png', function(err, file){
				if(err) throw err;
				console.log('copied file: ' + file);
			});
			
	
			easyimg.resize({
			  src: file,
			  dst: dirname + '/iOS/' + filename,
			  width:   '50%',
			  height:   '50%'
			}, function(err, stdout, stderr){
			  if (err) throw err
				console.log('resized file: ' + file + ' to 50%');
			});
		}
	}
	
});
