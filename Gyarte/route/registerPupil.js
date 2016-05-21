'use strict';

const Router = require('koa-router');
const mongoose = require('mongoose');

const Pupil = mongoose.model('Pupil');
const User = mongoose.model('User');

const router = new Router();

router.post('/registerPupil', function *(next) {
	const admin = yield User.findOne({key: this.request.body.adminKey});
	const user = yield User.findOne({username: this.request.body.username});

	if(admin.permissionLevel === 100) {
		var pupil = new Pupil({
			name: this.request.body.name,
			class: this.request.body.class,
			telephone: this.request.body.telephone
		});
		user.pupils.push(pupil);
		yield user.save();
		yield pupil.save();
		this.body = {registered: true};
	}
	else {
		this.body = {message: "You do not have permission to do this"};
	}
})

module.exports = router;
