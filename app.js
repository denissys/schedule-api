'use strict';

const SwaggerUi = require('swagger-tools/middleware/swagger-ui'),
      SwaggerExpress = require('swagger-express-mw'),
      bodyParser = require('body-parser'),
      mongoClient = require('./lib/clients/mongo/mongo-client.js').connect(),
      app = require('express')();

module.exports = app;

// Registered models
var Event = require('./models/schedule/Event.js');

var config = {
  appRoot: __dirname
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/schedule']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/docs');
  }
});
