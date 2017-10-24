let mong = require('mongoose');
let fiturkos = mong.Schema({
	KdKos: String,
    Internet: Number,
    KamarMandi: String,
    TV: Boolean,
    Kulkas: Boolean,
    Air: Number,
    Listrik: Number 
});
let FiturKos = module.exports = mong.model("FiturKos", fiturkos, "FiturKos");