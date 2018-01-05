'use strict';

var mongoose = require('mongoose');
var util = require('util');

module.exports = {
  getEvents: getEvents,
  createEvent: createEvent,
  updateEvent: updateEvent,
  eventStatus: eventStatus
};

function getEvents(req, res) {

  var sellerId = req.query.sellerId;
  var eventId = req.query.eventId;
  var event = mongoose.model('Event');

  var query = { 'sellerId': sellerId }
  if (eventId) {
    query._id = eventId; 
  }

  event.find(query, function (err, events) {
    if (!err) {
      res.status(200);
      res.json(events);
    } else {
      console.log('error on [getEvents] --> ' + err);
      res.status(500);
      res.json({'status': 'Unexpected error to find event'});
    }
  });
}

function createEvent(req, res) {

  var newEvent = req.body;
  var event = mongoose.model('Event').newInstance();
  event.sellerId = req.query.sellerId;
  event.startDatetime = newEvent.startDatetime;
  event.endDatetime = newEvent.endDatetime;
  event.eventType = newEvent.eventType;
  event.isActive = newEvent.isActive;

  event.save(function (err, doc) {
    if (!err) {
      event._id = doc._id;
      res.status(201);
      res.json(event);      
    } else {
      console.log('error on [createEvent] --> ' + err);
      res.status(500);
      res.json({'status': 'Unexpected error to created event'});
    }

  });
}

function updateEvent(req, res) {

  var updatedEvent = req.body;
  var event = mongoose.model('Event');

  event.update({ _id: req.query.eventId }, 
    { $set: {
      'startDatetime': updatedEvent.startDatetime,
      'endDatetime': updatedEvent.endDatetime,
      'eventType': updatedEvent.eventType,
      'isActive': updatedEvent.isActive
    }}, 
    function (err, status) {
      if (!err) {
        if (status.ok == 1 && status.n == 1) {
          res.status(200);
          res.json({'status': 'event updated'});
        } else {
          res.status(404);
          res.json({'status': 'event not found'});
        }        
      } else {
        console.log('error on [updateEvent] --> ' + err);
        res.status(500);
        res.json({'status': 'Unexpected error to update event'});
      }
  });
}

function eventStatus(req, res) {

  var event = mongoose.model('Event');

  event.update({ _id: req.query.eventId }, 
    { $set: { 'isActive': req.query.isActive } }, 
    function (err, status) {
      if (!err) {
        if (status.ok == 1 && status.n == 1) {
          res.status(200);
          res.json({'status': 'event updated'});
        } else {
          res.status(404);
          res.json({'status': 'event not found'});
        }        
      } else {
        console.log('error on [updateEvent] --> ' + err);
        res.status(500);
        res.json({'status': 'Unexpected error to update event'});
      }
  });
}
