let mong = require('mongoose');
let penjaga = mong.Schema({
	KdPenjaga: String,
    KdKos: String,
    KategoriKos:String,
    NamaPenjaga: String,
    Alamat:String,
    NoHp:String,
    JenisKelamin:String,
});
let Penjaga = module.exports = mong.model("Penjaga", penjaga, "Penjaga");