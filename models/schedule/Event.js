var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

var Schema = mongoose.Schema, 
		id = Schema.ObjectId;

var EventSchema = new Schema({
  sellerId:      {type: String,  required: [true, "sellerId can't be blank"], index: true},
  startDatetime: {type: String,  required: [true, "startDatetime can't be blank"], index: true},
  endDatetime:   {type: String,  required: [true, "endDatetime can't be blank"], index: true},
  eventType:     {type: String,  required: [true, "event can't be blank"], index: true},
  isActive:      {type: Boolean, required: [true, "active can't be blank"]}
});

function newInstance() {
	var EventSchedule = mongoose.model('Event');
	return new EventSchedule();
}

module.exports = mongoose.model('Event', EventSchema);
module.exports.newInstance = newInstance;
