'use strict';

const Router = require('koa-router');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = new Router();

router.post('/pupilList', function *(next) {
	const user = yield User.findOne({key: this.request.body.key}).populate('pupils');
	if(user) {
		const pupils = user.pupils.map(pupil => ({
			name: pupil.name,
			id: pupil._id,
			class: pupil.class
		}));
		this.body = {pupils: pupils};
	}
	else {
		this.body = {message: "You must be logged in to continue"};
	}
})

module.exports = router;
