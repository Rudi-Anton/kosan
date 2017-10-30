let mong = require('mongoose');
let penghuni = mong.Schema({
	KdKos: String,
    KdKamarKos: String,
    NamaPenghuni: String,
    TGLKos: String,
    NoKTP: String,
    NoHP: String,
    NamaBank: String
});
let Penghuni = module.exports = mong.model("Penghuni", penghuni, "Penghuni");