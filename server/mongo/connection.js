var mongoose = require('mongoose');

function connect() {

	mongoose.connect('mongodb://127.0.0.1/schedule')
	mongoose.Promise = global.Promise;
	
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));

	return db;
}

module.exports.connect = connect;