Penghuni=require('./PenghuniModel.js');
module.exports.getPenghuni=function(callback,limit){
    Penghuni.find(callback).limit(limit);
}
module.exports.getPenghuniByKode = function(kode, callback){
    Penghuni.find({KdKos: kode}, callback);
}
module.exports.createPenghuni=function(akses,callback){
    Penghuni.create(akses,callback);
}
module.exports.removePenghuni=function(_id,callback){
    Penghuni.findByIdAndRemove(_id,callback);
}
module.exports.updatePenghuni=function(_id,akses,callback){
    Penghuni.findByIdAndUpdate(_id,akses,callback);
}
module.exports.getPenghuniById=function(id,callback){
    Penghuni.findById(id,callback);
}