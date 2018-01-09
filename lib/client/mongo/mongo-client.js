const path = require('path'),
      settings = require(path.resolve('./lib/utils/settings.js')).load('db').read(),
      mongoose = require('mongoose');

function connect() {

	mongoose.connect('mongodb://'+ settings.mongo.address +'/'+ settings.mongo.databaseName);
	mongoose.Promise = global.Promise;
	
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));

	return db;
}

module.exports.connect = connect;