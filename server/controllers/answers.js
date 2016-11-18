var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
var Answer = mongoose.model('Answer');

module.exports = (function() {
  return {
    create: function(req, res) {
      console.log(req.body);
      User.findOne({_id: req.body._user}, function(err, user) {
        if (err) {
          res.jon(err);
        } else {
          Question.findOne({_id: req.body._question}, function(err, question) {
            if (err) {
              res.json(err);
            } else {
              var answer = new Answer(req.body)
              .save(function(err, answer) {
                console.log(user);
                user.answers.push(answer)
                user.save(function(err, user) {
                  if (err) {
                    res.json(err);
                  } else {
                    question.answers.push(answer)
                    question.save(function(err, question) {
                      if (err) {
                        res.json(err);
                      } else {
                        res.json(answer);
                      }
                    })
                  }
                })
              })
            }
          })
        }
      })
    },
    get: function(req, res) {
      console.log(req.params.questionId);
      Answer.find({_question: req.params.questionId}, function(err, answers) {
        if (err) {
          res.json(err);
        } else {
          res.json(answers);
        }
      })
    },
    like: function(req, res) {
      Answer.findOne({_id: req.params.answerId}, function(err, answer) {
        answer.likes++;
        answer.save(function(err, answer) {
          if (err) {
            console.log(err);
          } else {
            res.json(answer);
          }
        })
      })
    }
  }
})()
