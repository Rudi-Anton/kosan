let mong = require('mongoose');
let penjaga = mong.Schema({
	KdPenjaga: String,
    KdKos: String,
    KategoriKos:String,
    NamaPenjaga: String
});
let Penjaga = module.exports = mong.model("Penjaga", penjaga, "Penjaga");