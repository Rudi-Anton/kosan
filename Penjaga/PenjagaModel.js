let mong = require('mongoose');
let penjaga = mong.Schema({
	KdPenjaga: String,
    KdKos: String,
    NamaPenjaga: String
});
let Penjaga = module.exports = mong.model("Penjaga", penjaga, "Penjaga");