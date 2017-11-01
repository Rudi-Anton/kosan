Kos=require('./KosModel.js');
module.exports.getKos=function(callback,limit){
    Kos.find(callback).limit(limit);
}
module.exports.createKos=function(akses,callback){
    Kos.create(akses,callback);
}
module.exports.removeKos=function(_id,callback){
    Kos.findByIdAndRemove(_id,callback);
}
module.exports.updateKos=function(_id,akses,callback){
    Kos.findByIdAndUpdate(_id,akses,callback);
}
module.exports.updateByKdKos=function(KdKos,akses,callback){
    Kos.findByIdAndUpdate(kdkos,akses,callback);
}
module.exports.getKosById=function(id,callback){
    Kos.findById(id,callback);
}
module.exports.getKosByKode = function (kode, callback) {
    Kos.find({ KdKos: kode }, callback);
}