'use strict';

const Router = require('koa-router');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = new Router();

router.post('/dayInfo', function *(next) {
  const user = yield User.findOne({key: this.request.body.key}).populate('pupils');
  let correctPupil;
  if(user) {
    user.pupils.forEach(pupil => {
      if(pupil._id.equals(this.request.body.id)) {
        correctPupil = pupil;
        pupil.dayInfo[this.request.body.date] ={
          comment: this.request.body.comment,
          present: this.requst.body.present
        }
      }
    });
    if(correctPupil) {
      correctPupil.markModified('dayInfo');
      yield correctPupil.save();
      this.body = {success: true};
    }
  }
})

module.exports = router;
