const Router = require('koa-router');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = new Router();

router.post('/pupilList', function *(next) {
	const user = yield User.findOne({username: this.request.body.username}).populate('pupils');
	const pupils = user.pupils.map(pupil => ({
		name: pupil.name,
		id: pupil._id
	}));
	this.body = pupils;
})

module.exports = router;