const Router = require('koa-router');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = new Router();

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz1234567890';

function genKey() {
	var key = "";
	for (var i = 0; i<20; i++) {
		key+=alphabet[Math.floor(Math.random() * alphabet.length)];
	}
	return key;
}

router.post('/register', function *(next) {
	const admin = yield User.findOne({key: this.request.body.adminKey});

	if(admin.permissionLevel === 100) {
		var user = new User({
			username: this.request.body.username,
			password: this.request.body.password,
			permissionLevel: this.request.body.permissionLevel,
			key: genKey()
		});
	}

	try {
		yield user.save();
	}
	catch(e) {
		console.log(e);
		if(e.code === 11000) {
			this.body = {registered: false, message: "duplicate key"};
		}
		else {
			throw e;
		}
		return;
	}
	this.body = {registered: true};
})

module.exports = router;
