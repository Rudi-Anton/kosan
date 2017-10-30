let mong = require('mongoose');
let penghuni = mong.Schema({
	KdKos: String,
    KdKamarKos: String,
    NamaPenghuni: String,
    TGLKos: {
        $date: Date
    },
    NoKTP: String,
    NoHP: String[],
    NamaBank: String
});
let Penghuni = module.exports = mong.model("Penghuni", penghuni, "Penghuni");