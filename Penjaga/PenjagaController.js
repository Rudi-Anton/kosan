Penjaga = require('./PenjagaModel.js');
module.exports.getPenjaga = function (callback) {
    Penjaga.find(callback);
}
module.exports.createPenjaga = function (akses, callback) {
    Penjaga.create(akses, callback);
}
module.exports.removePenjaga = function (_id, callback) {
    Penjaga.findByIdAndRemove(_id, callback);
}
module.exports.updatePenjaga = function (_id, akses, callback) {
    Penjaga.findByIdAndUpdate(_id, akses, callback);
}
module.exports.getPenjagaById = function (id, callback) {
    Penjaga.aggregate([
        {
            "$lookup": {
                from: "Kos",
                localField: "KdKos",
                foreignField: "KdKos",
                as: "infoKos"
            }
        },
        {
            "$lookup": {
                from: "GajiPenjaga",
                localField: "KategoriKos",
                foreignField: "infoKos.KategoriKos",
                as: "infoKategoriKos"
            }
        },
        {
            $project: {
                _id: id,
                NamaPenjaga: "$NamaPenjaga",
                KategoriKos: "$infoKategoriKos.Gaji",
            }
        }, {
            $match: {
                _id: id
            }
        }], callback)
}