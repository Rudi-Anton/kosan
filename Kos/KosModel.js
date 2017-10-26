let mong = require('mongoose');
let kos = mong.Schema({
	
    KdKos: String,
    KategoriKos: String,
    NamaKos: String,
    JmlKamar:Number,
    Location: Array,
    Pendapatan: Number
});
let Kos = module.exports = mong.model("Kos", kos, "Kos");