const mongoose = require('mongoose');

var pupil = new mongoose.Schema({
	name: {type: String},
	class: {type: String},
	telephone: {type: String},
	dayInfo: {

	}

})

module.exports = mongoose.model('Pupil', pupil);
