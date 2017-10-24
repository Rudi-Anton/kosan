let mong = require('mongoose');
let penghuni = mong.Schema({
	KdKos: String,
    KdPenghuniKos: String,
    NamaPenghuni: String,
    TGLKos: {
        $date: Date
    },
    NoKTP: String,
    No: String,
    NamaBank: String
});
let Penghuni = module.exports = mong.model("Penghuni", penghuni, "Penghuni");