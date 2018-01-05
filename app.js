'use strict';

var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var SwaggerExpress = require('swagger-express-mw');
var bodyParser = require('body-parser')
var db = require('./server/mongo/connection.js').connect();
var app = require('express')();

module.exports = app;

// Load models
var EventSchedule = require('./models/EventSchedule.js');

var config = {
  appRoot: __dirname
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/schedule']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/docs');
  }
});
