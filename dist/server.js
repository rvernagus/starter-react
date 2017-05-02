'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 8080;
var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.send('Hello, World!');
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on http://localhost:' + port);
  }
});
