FiturKos = require('./FiturKosModel.js');
module.exports.getFiturKos = function (callback, limit) {
    FiturKos.find(callback).limit(limit);
}
module.exports.getFiturKosByKode = function (kode, callback) {
    FiturKos.find({ KdKos: kode }, callback);
}
module.exports.getJumlah = function (KdKos,callback) {
    FiturKos.aggregate([
        {
            "$lookup": {
                from: "Kos",
                localField: "KdKos",
                foreignField: "KdKos",
                as: "infoKos"
            }
        }, {
            $project: {
                _id: 0,
                KdKos:"$KdKos",
                Jumlah: { $add: ["$Internet", "$Listrik", "$Air"] }
            }
        },
        {
            $match: {
                "KdKos": KdKos
            }
        }
    ],
        callback);
}
module.exports.createFiturKos = function (akses, callback) {
    FiturKos.create(akses, callback);
}
module.exports.removeFiturKos = function (_id, callback) {
    FiturKos.findByIdAndRemove(_id, callback);
}
module.exports.updateFiturKos = function (_id, akses, callback) {
    FiturKos.findByIdAndUpdate(_id, akses, callback);
}
module.exports.getFiturKosById = function (id, callback) {
    FiturKos.findById(id, callback);
}