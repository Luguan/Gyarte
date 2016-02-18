const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bcrypt = bluebird.promisifyAll(require('bcryptjs'));


const SALT_WORK_FACTOR = 10;	//Level of security used for passwords

var Schema = mongoose.Schema;

var user = new Schema ({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	key: {type: String, required: true},
	pupils: [{ type : Schema.Types.ObjectId, ref: 'Pupil' }],
});

user.pre('save', function (next) {
	var user = this;

	// Only hash the password if it has been modified or if it is new
	if(!user.isModified('password')) {
		next();
		return;
	}

	// Generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if(err) {
			next(err);
			return;
		}

		// Hash the password using our new salt
		bcrypt.hash(user.password, salt, function(err, hash) {

			// Override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

user.methods.comparePassword = function *(candidatePassword) {
	return yield bcrypt.compareAsync(candidatePassword, this.password);
}

module.exports = mongoose.model('User', user);