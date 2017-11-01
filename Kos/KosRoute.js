let expres = require('express');
let route = expres.Router();
let KosController=require('./KosController.js');

route.get('/kos', function (req, res) {
    KosController.getKos(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/kos', function (req, res) {
    let akses = req.body;
    KosController.createKos(akses,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/kos/:_id', function (req, res) {
    KosController.removeKos(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
// route.put('/kos/kode/:KdKos', function (req, res) {
//      let akses = req.body;
//      KosController.updateByKdKos(req.params.KdKos,akses,function (error, respon) {
//          if (error) {
//              throw error;
//          }
//          res.json(respon);
//      });
//  });

 route.put('/kos/:_id', function (req, res) {
     let akses = req.body;
     KosController.updateKos(req.params._id,akses,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/kos/:_id', function (req, res) {
     let id = req.params._id;
     KosController.getKosById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.get('/kos/kode/:kode', function (req, res) {
     let kode = req.params.kode;
     KosController.getKosByKode(kode, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;