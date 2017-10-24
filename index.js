let expres = require('express');
let mong = require('mongoose');
let bodyParser = require('body-parser');
let app=expres();

//sintak token
 //let jwt    = require('jsonwebtoken');
 //let jwt_secret = "shhh";
 //sintak token

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8889));

//sintak token
//let verifyToken = require('./middleware/verifyToken');
//sintak token

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS,PUT");
  next();
});

let FiturKosRoute=require('./FiturKos/FiturKosRoute.js');
app.use('/api', FiturKosRoute);
let KosRoute=require('./Kos/KosRoute.js');
app.use('/api', KosRoute);
let GajiPenjagaRoute=require('./GajiPenjaga/GajiPenjagaRoute.js');
app.use('/api', GajiPenjagaRoute);
// let provinsiRoute=require('./provinsi/provinsiRoute.js');
// app.use('/api',provinsiRoute);
require("./koneksidb/koneksidb")
//mong.connect('mongodb://dbpelatihan:Sayangorangtua20@ds113785.mlab.com:13785/dbpelatihan');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});