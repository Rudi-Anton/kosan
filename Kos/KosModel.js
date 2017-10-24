let mong = require('mongoose');
let kos = mong.Schema({
	KdKamar: String,
    KdKos: String,
    KategoriKos: String,
    Location: Array,
    Pendapatan: Number
});
let Kos = module.exports = mong.model("Kos", kos, "Kos");