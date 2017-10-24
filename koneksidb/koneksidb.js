let mongoose = require('mongoose');

let database = {
	user : 'dbkos',
	pass : 'Sayangorangtua20',
	url : 'ds229295.mlab.com:29295',
	name : 'dbkos'
}
mongoose.connect('mongodb://'+database.user+':'+database.pass+'@'+database.url+'/'+database.name);
