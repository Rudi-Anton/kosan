let expres = require('express');
let route = expres.Router();
let KamarController=require('./KamarController.js');

route.get('/kamar', function (req, res) {
    KamarController.getKamar(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});


route.get('/kamar/kode/:kode', function(req,res){
    let kode = req.params.kode;
    KamarController.getKamarByKode(kode, function(error,respon){
        if(error){
            throw error;
        }
        res.json(respon);
    })
})

route.post('/kamar', function (req, res) {
    let akses = req.body;
    KamarController.createKamar(akses,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/kamar/:_id', function (req, res) {
    KamarController.removeKamar(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/kamar/:_id', function (req, res) {
     let akses = req.body;
     KamarController.updateKamar(req.params._id,akses,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/kamar/:_id', function (req, res) {
     let id = req.params._id;
     KamarController.getKamarById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;