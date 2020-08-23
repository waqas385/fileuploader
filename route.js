const formidable = require('formidable');
const mylib = require('./library');
const mustache = require('mustache');


function request(request) {
	var data = {}, 
		message = {};

	data.pageTitle = "- Pic update";
	switch (request.url) {
		case '/picupload':
			try {
				_picupload(request);
				message.type = 'success';
				message.text = 'File uploaded successfully!';
			} catch (e) {
				message.type = 'error';
				message.text = e.message;
			}
			data.message = message;
			break;
		default:
			// Do nothing, show index page
			break;
	}
	return _response(data)
}

function _response(data) {
	const page = mylib.getFileContent('./index.mustache');
	return mustache.render(page, data);
}

function _picupload(request) {
	var form = new formidable.IncomingForm();
	form.parse(request, function (err, fields, files) {
		// oldpath : temporary folder to which file is saved to
		const oldpath = files.proficepic.path;
		const fileExtension = mylib.getFileExtension(files.proficepic.name);
		let newpath = 'uploads/' + new Date().getTime() + fileExtension;
		try {
			mylib.moveFile(oldpath, newpath);
		} catch (e) {
			throw new Error(e.message);
		}
	});
}

module.exports = {
	request
};