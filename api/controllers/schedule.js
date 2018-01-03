'use strict';

var util = require('util');

module.exports = {
  getSchedule: getSchedule,
  createSchedule: createSchedule
};

function getSchedule(req, res) {

  var sellerId = req.query.sellerId;
  var msgRes = util.format('Schedule, %s', sellerId);
  res.json(msgRes);
}

function createSchedule(req, res) {

  //var sellerId = req.query.sellerId;
  var Schedule = {"sellerId": "123"};
  res.header('Content-Type', 'application/json');
  res.json(Schedule);
}
