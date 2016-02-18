const Router = require('koa-router');
const mongoose = require('mongoose');

const Pupil = mongoose.model('Pupil');
const User = mongoose.model('User');

const router = new Router();

router.post('/registerPupil', function *(next) {
	const user = yield User.findOne({username: this.request.body.username});
	var pupil = new Pupil({
		name: this.request.body.name,
	});
	user.pupils.push(pupil);
	yield user.save();
	yield pupil.save();
	this.body = {registered: true};
})

module.exports = router;