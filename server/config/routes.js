var login = require('./../controllers/login.js')
var questions = require('./../controllers/questions.js')
var answers = require('./../controllers/answers.js');

module.exports = function(app) {
  app.post('/login', login.login);
  app.get('/logout', login.logout);
  app.get('/checkSess', login.checkSess);
  app.get('/questions', questions.index);
  app.post('/questions', questions.create)
  app.get('/question/:questionId', questions.getQuestion);
  app.post('/answers/', answers.create);
  app.get('/answers/:questionId', answers.get);
  app.get('/answers/:answerId/like', answers.like);
}
