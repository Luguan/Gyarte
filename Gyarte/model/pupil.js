const mongoose = require('mongoose');

var pupil = new mongoose.Schema({
	name: {type: String},
	dayInfo: {

	}

})

module.exports = mongoose.model('Pupil', pupil);