'use strict';

var util = require('util');

module.exports = {
  getSchedule: getSchedule,
  addSchedule: addSchedule
};

function getSchedule(req, res) {

  var sellerId = req.query.sellerId;
  var msgRes = util.format('Schedule, %s', sellerId);
  res.json(msgRes);
}

function addSchedule(req, res) {

  //var sellerId = req.query.sellerId;
  var Schedule = {"sellerId": "123"};
  res.header('Content-Type', 'application/json');
  res.json(Schedule);
}