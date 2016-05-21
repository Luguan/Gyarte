'use strict';

const Koa = require('koa');
const Serve = require('koa-static');
const Router = require('koa-router');
const Parser = require('koa-bodyparser');
const Mongoose = require('mongoose');
const Pupil = require('./model/pupil');
const User = require('./model/user');
const Register = require('./route/register');
const RegisterPupil = require('./route/registerPupil');
const Login = require('./route/login');
const GetPupil = require('./route/getPupils');
const dayInfo = require('./route/dayInfo');

Mongoose.connect('mongodb://localhost/gyarte', function (err) {
	console.log("Error is " + err);
})
//Mongoose.connect('mongodb://gyarte:sten123@ineentho.com/gyarte'); Real server
const app = new Koa();
const router = new Router();

app.use(Parser());
app.use(Serve('./html'));

app.use(Register.routes());
app.use(RegisterPupil.routes());
app.use(Login.routes());
app.use(GetPupil.routes());
app.use(dayInfo.routes());

app.use(Register.allowedMethods());
app.use(Login.allowedMethods());

//app.use(router.routes());
//app.use(router.allowedMethods());

app.listen(3000);
