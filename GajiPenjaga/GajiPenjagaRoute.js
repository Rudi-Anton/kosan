let expres = require('express');
let route = expres.Router();
let GajiPenjagaController=require('./GajiPenjagaController.js');

route.get('/GajiPenjaga', function (req, res) {
    GajiPenjagaController.getGajiPenjaga(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/GajiPenjaga', function (req, res) {
    let akses = req.body;
    GajiPenjagaController.createGajiPenjaga(akses,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/GajiPenjaga/:_id', function (req, res) {
    GajiPenjagaController.removeGajiPenjaga(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/GajiPenjaga/:_id', function (req, res) {
     let akses = req.body;
     GajiPenjagaController.updateGajiPenjaga(req.params._id,akses,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/GajiPenjaga/:_id', function (req, res) {
     let id = req.params._id;
     GajiPenjagaController.getGajiPenjagaById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;