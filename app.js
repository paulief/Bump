// set env variables
require('dotenv').config();

var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var bookshelf = require('./helpers/bookshelf');

app.use(require('./controllers'));

app.listen(port, function() {
  console.log('Listening on port ' + port);
});