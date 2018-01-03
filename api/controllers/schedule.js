'use strict';

var util = require('util');

module.exports = {
  schedule: schedule
};

function schedule(req, res) {

  var sellerId = req.query.sellerId;
  var msgRes = util.format('Schedule, %s', sellerId);
  res.json(msgRes);
}
