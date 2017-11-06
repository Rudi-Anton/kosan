Kamar=require('./KamarModel.js');
module.exports.getKamar=function(callback,limit){
    Kamar.find(callback).limit(limit);
}
module.exports.createKamar=function(akses,callback){
    Kamar.create(akses,callback);
}

module.exports.getKamarByKode = function(kode, callback){
    Kamar.find({KdKos: kode}, callback);
}

module.exports.removeKamar=function(_id,callback){
    Kamar.findByIdAndRemove(_id,callback);
}
module.exports.updateKamar=function(_id,akses,callback){
    Kamar.findByIdAndUpdate(_id,akses,callback);
}
module.exports.getKamarById=function(id,callback){
    Kamar.findById(id,callback);
}