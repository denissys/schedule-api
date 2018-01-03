'use strict';

var util = require('util');

module.exports = {
  getEvent: getEvent,
  updateEvent: updateEvent,
  changeStatusEvent: changeStatusEvent
};

function getEvent(req, res) {

  var sellerId = req.query.sellerId;
  var msgRes = util.format('Schedule, %s', sellerId);
  res.json(msgRes);
}

function updateEvent(req, res) {

  //var sellerId = req.query.sellerId;
  var Schedule = {"sellerId": "123"};
  res.header('Content-Type', 'application/json');
  res.json(Schedule);
}

function changeStatusEvent(req, res) {

  //var sellerId = req.query.sellerId;
  var Schedule = {"sellerId": "123"};
  res.header('Content-Type', 'application/json');
  res.json(Schedule);
}