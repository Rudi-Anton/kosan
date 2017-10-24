let mong = require('mongoose');
let kamar = mong.Schema({
	KdKamarKos: String,
    KdKos: String,
    AC: Boolean,
    Tagihan: Number,
    CuciPakaian: Number,
    BuktiTagihan: String
});
let Kamar = module.exports = mong.model("Kamar", kamar, "Kamar");