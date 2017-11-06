let expres = require('express');
let route = expres.Router();
let PenghuniController=require('./PenghuniController.js');

route.get('/penghuni', function (req, res) {
    PenghuniController.getPenghuni(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});

route.get('/penghuni/kode/:kode', function(req,res){
    let kode = req.params.kode;
    PenghuniController.getPenghuniByKode(kode, function(error,respon){
        if(error){
            throw error;
        }
        res.json(respon);
    })
})

route.post('/penghuni', function (req, res) {
    let akses = req.body;
    PenghuniController.createPenghuni(akses,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/penghuni/:_id', function (req, res) {
    PenghuniController.removePenghuni(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/penghuni/:_id', function (req, res) {
     let akses = req.body;
     PenghuniController.updatePenghuni(req.params._id,akses,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/penghuni/:_id', function (req, res) {
     let id = req.params._id;
     PenghuniController.getPenghuniById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;