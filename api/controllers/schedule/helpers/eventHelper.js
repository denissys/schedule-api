'use strict';

var mongoose = require('mongoose');

module.exports = {
  getEvents: getEvents
};


/**
 * Example:
 *
 * eventHelper.getEvents(event.sellerId, event.startDatetime, event.endDatetime, function(err, events) {
 *    // your code
 * });
*/
function getEvents(sellerId, startDatetime, endDatetime, callback) {

  var model = mongoose.model('Event');
  var query = { "sellerId": sellerId};

  model.find(query, function(err, docs) { 
  	if (!err && docs != null) {
		callback(err, docs);
  	} else {
  		callback(err, docs);
  	}
  });
}
