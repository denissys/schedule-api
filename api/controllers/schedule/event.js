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
  var msgRes = util.format('Schedule, %s', sellerId);
  res.json(msgRes);
}

function createEvent(req, res) {

  //console.log(req.body);
  console.log(req.params);

  var EventSchedule = mongoose.model('EventSchedule');
  var instance = new EventSchedule();
  instance.id = 2;
  instance.startDatetime = '2017-12-31T00:00:01.01Z';
  instance.endDatetime = '2017-12-31T00:00:01.01Z';
  instance.event = 'lack_of_delivery_staff';
  instance.active = true;
  // instance.save(function (err) {
  // });

  //var sellerId = req.query.sellerId;
  var Schedule = {"sellerId": "123"};
  res.header('Content-Type', 'application/json');
  res.json(Schedule);
}

function updateEvent(req, res) {

  //var sellerId = req.query.sellerId;
  var Schedule = {"sellerId": "123"};
  res.header('Content-Type', 'application/json');
  res.json(Schedule);
}

function eventStatus(req, res) {

  //var sellerId = req.query.sellerId;
  var Schedule = {"sellerId": "123"};
  res.header('Content-Type', 'application/json');
  res.json(Schedule);
}
