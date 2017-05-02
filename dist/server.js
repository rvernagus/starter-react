'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 8080;
var app = (0, _express2.default)();

app.set('views', _path2.default.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { message: 'Hello from Express!' });
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on http://localhost:' + port);
  }
});
