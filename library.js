/*
* File includes functions require to perform upload, create directory, file extension, file content
*/
let fs = require('fs');
let path = require('path');

function getFileExtension(filename) {
	return path.extname(filename);
}

function createDirIfNotExists(name) {
	if (!fs.existsSync(name)){
		fs.mkdirSync(name);
	}
}

function moveFile(from, to) {
	fs.rename(from, to, function (err) {
		if (err) {
			throw new Error("Error occurred: "+err);
		}
	});
}

function getFileContent(filename) {
	return fs.readFileSync(filename, "utf8");
}

module.exports = {
	createDirIfNotExists,
	getFileContent,
	moveFile,
	getFileExtension
}
