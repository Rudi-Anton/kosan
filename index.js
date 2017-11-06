//Express.js adalah framework untuk node.js. 
//Kelebihan:
// Dukungan pembuatan middleware (middleware adalah jembatan penghubung database dengan aplikasi)
// Dukungan terhadap berbagai HTTP verb seperti POST, GET, PUT, DELETE, OPTION, HEAD, dan lainnya
// Sudah terpasang template engine Jade
// manajemen file statik seperti CSS dan Javascript
// Sangat bebas untuk dikostumisasi
let expres = require('express');
let mong = require('mongoose');
let bodyParser = require('body-parser');
let app=expres(); 


//sintak token
 global.config = require('./config/config');
 let jwt    = require('jsonwebtoken');
 let jwt_secret = "shhh";
 //sintak token

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8889));

//sintak token
let verifyToken = require('./middleware/verifyToken');
//sintak token

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS,PUT");
  next();
});
 
let LoginRoute=require('./login/loginRoute.js');
app.use('/api', LoginRoute);
let FiturKosRoute=require('./FiturKos/FiturKosRoute.js');
app.use('/api',verifyToken, FiturKosRoute);
let KosRoute=require('./Kos/KosRoute.js');
app.use('/api', KosRoute);
let GajiPenjagaRoute=require('./GajiPenjaga/GajiPenjagaRoute.js');
app.use('/api', GajiPenjagaRoute);
let KamarRoute=require('./Kamar/KamarRoute.js');
app.use('/api', KamarRoute);
let PenghuniRoute=require('./Penghuni/PenghuniRoute.js');
app.use('/api', PenghuniRoute);
let PenjagaRoute=require('./Penjaga/PenjagaRoute.js');
app.use('/api', PenjagaRoute);
// let provinsiRoute=require('./provinsi/provinsiRoute.js');
// app.use('/api',provinsiRoute);
require("./koneksidb/koneksidb")
//mong.connect('mongodb://dbkos:Sayangorangtua20@ds113785.mlab.com:13785/dbpelatihan');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});