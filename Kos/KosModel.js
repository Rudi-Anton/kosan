let mong = require('mongoose');
let kos = mong.Schema({
	
    KdKos: String,
    NamaKos:String,
    KategoriKos: String,
    NamaKos: String,
    JmlKamar:Number,
    Location: String,
    Latitude: Number,
    Longitude: Number,
    Pendapatan: Number
});
let Kos = module.exports = mong.model("Kos", kos, "Kos");