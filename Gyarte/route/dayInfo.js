'use strict';

const Router = require('koa-router');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = new Router();

router.post('/sendDayInfo', function *() {
const user = yield User.findOne({key: this.request.body.key}).populate('pupils');
let correctPupil;
if(user) {
  correctPupil = getPupil(user, this.request.body.id);
}
  if(correctPupil) {
    correctPupil.markModified('dayInfo');
    correctPupil.dayInfo[this.request.body.date] ={
      comment: this.request.body.comment,
      present: this.request.body.present
    }
    yield correctPupil.save();
  }
  else {
    this.body = {message: "pupil not found"};
  }
})

router.post('/getDayInfo', function *() {
  const user = yield User.findOne({key: this.request.body.key}).populate('pupils');
  let correctPupil;
  if(user) {
    correctPupil = getPupil(user, this.request.body.id);
  }
  if(correctPupil) {
    this.body = {
    comment: correctPupil.dayInfo[this.request.body.date].comment,
    present: correctPupil.dayInfo[this.request.body.date].present};
  }
  else {
    this.body = {message: "pupil not found"};
  }
})

function getPupil(user, id) {
  return user.pupils.find(pupil => pupil._id.equals(id));
}

module.exports = router;
