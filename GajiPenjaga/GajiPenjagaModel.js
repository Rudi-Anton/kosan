let mong = require('mongoose');
let gajipenjaga = mong.Schema({
	KategoriKos: String,
    Gaji: String
});
let GajiPenjaga = module.exports = mong.model("GajiPenjaga", gajipenjaga, "GajiPenjaga");