let expres = require('express');
let route = expres.Router();
let FiturKosController=require('./FiturKosController.js');

route.get('/fiturkos', function (req, res) {
    FiturKosController.getFiturKos(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/fiturkos', function (req, res) {
    let akses = req.body;
    FiturKosController.createFiturKos(akses,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/fiturkos/:_id', function (req, res) {
    FiturKosController.removeFiturKos(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/fiturkos/:_id', function (req, res) {
     let akses = req.body;
     FiturKosController.updateFiturKos(req.params._id,akses,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/fiturkos/:_id', function (req, res) {
     let id = req.params._id;
     FiturKosController.getFiturKosById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;