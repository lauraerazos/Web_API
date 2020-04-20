var express = require('express');
var app = express();
var db = require('./db/db');
var estudianteRoute = require('./routes/estudiante-route');
app.use(express.json());
db.conexion();

app.use('/api/estudiante', estudianteRoute);

var server = app.listen(3000, a => console.log('App in port 3000'));
