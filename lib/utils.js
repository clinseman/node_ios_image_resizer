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

/*
findit.find(source, function(file, stat){
	//console.log(file);
	if(path.extname(file).match(/\.png$/)){
		console.log(file);
	}
})
*/
