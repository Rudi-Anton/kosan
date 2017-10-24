FiturKos=require('./FiturKosModel.js');
module.exports.getFiturKos=function(callback,limit){
    FiturKos.find(callback).limit(limit);
}
module.exports.createFiturKos=function(akses,callback){
    FiturKos.create(akses,callback);
}
module.exports.removeFiturKos=function(_id,callback){
    FiturKos.findByIdAndRemove(_id,callback);
}
module.exports.updateFiturKos=function(_id,akses,callback){
    FiturKos.findByIdAndUpdate(_id,akses,callback);
}
module.exports.getFiturKosById=function(id,callback){
    FiturKos.findById(id,callback);
}