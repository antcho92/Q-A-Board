var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = (function() {
  return {
    index: function(req, res) {
      Question.find({})
        .populate('_user')
        .exec(function(err, questions) {
          if (err) {
            res.json(err);
          } else {
            res.json(questions);
          }
        });
    },
    create: function(req, res) {
      User.findOne({_id: req.body._user}, function(err, user) {
        if (err) {console.log(err)}
        var question = new Question(req.body);
        question.save(function(err) {
          if (err) {console.log(err)}
          user.questions.push(question);
          user.save(function(err, user) {
            if (err) {console.log(err)}
            res.json(user);
          })
        })
      });
    },
    getQuestion: function(req, res) {
      Question.findOne({_id: req.params.questionId})
      .populate('_user')
      .populate({
        path: 'answers',
        model: 'Answer',
        populate: {
          path: '_user',
          model: 'User'
        }
      })
      .exec(function(err, question) {
        if (err) {
          console.log(err)
        } else {
          res.json(question);
        }
      })
    }
  }
})();
