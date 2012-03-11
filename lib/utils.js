var fs = require('fs'),
	 _ = require('underscore')._,
	path = require('path');

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
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

exports.createDirSync = function createDirSync(directory){

	path.exists(directory, function (exists) {
	
		if (!exists){
		
			try {
				fs.mkdirSync(directory, 0755);
				console.log('creating destination directory: ' + directory);
			}
			catch (err) {
				console.log('err ' + err);
			}
			
		}else{
			console.log('destination directory exists: ' + directory);			
		}
	});

}