'use strict';

const mongoose = require('mongoose');
const Router = require('koa-router');
const User = mongoose.model('User');

const router = new Router();

router.post('/login', function *(next) {

	const user = yield User.findOne({
		username: this.request.body.username
	});
	console.log(this.request.body);
	if(user !== null) {
		const isMatch = yield user.comparePassword(this.request.body.password);

		if(isMatch){
			this.body =  {loggedIn: true, message: "logged in", key: user.key};
		}
		else{
			this.body = {loggedIn: false, message: "wrong password"};
		}
	}
	else {
		this.body = {loggenIn: false, message: "wrong username"};
	}
})

module.exports = router;
