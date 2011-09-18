var fs = require('fs'),
	 _ = require('underscore')._,
	path = require('path');


	
exports.findImageFiles = function findImageFiles(source, cb){
	fs.readdir(source, function(err, files){
		if(err) cb(err)
		_.each(files, function(file){
			if(path.extname(file).match(/\.png$/)){
				cb(null, file);	
			}
		})
	});
}

exports.copyFile = function copyFile(sourceFile, destinationFile, cb){
	 
	fs.readFile(sourceFile, function(err, data){
		if(err) cb(err);
		fs.writeFile(destinationFile, data, function(err){
			if(err) cb(err);
			cb(null, destinationFile);
		})
	});
}

exports.create2xName = function(fileName){
	var extension = path.extname(fileName);
	return path.basename(fileName, extension) + '@2x' + extension; 
}

exports.createDirSync = function createDirSync(directory){
	
	path.exists(directory, function (exists) {
		if (!exists){
			fs.mkdirSync(directory, 0755);
			console.log('creating destination directory: ' + directory);			
		}else{
			console.log('destination directory exists: ' + directory);			
		}
	});
}