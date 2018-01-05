var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var EventScheduleSchema = new Schema({
  id:            {type: String, index: true},
  startDatetime: {type: String, required: [true, "startDatetime can't be blank"], index: true},
  endDatetime:   {type: String, required: [true, "endDatetime can't be blank"], index: true},
  event:         {type: String, required: [true, "event can't be blank"], index: true},
  active:        {type: String, required: [true, "active can't be blank"]}
});

module.exports = mongoose.model('EventSchedule', EventScheduleSchema);
