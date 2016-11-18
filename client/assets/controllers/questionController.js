app.controller('questionController', ['$scope', '$routeParams', 'questionFactory', function($scope, $routeParams, qF) {
  console.log('question factory')
  var self = this;
  qF.checkSess(function(user) {
    self.user = user;
  })
  function updateQuestion(question) {
    self.question = question;
    self.answer = {};
  }
  qF.getQuestion($routeParams.questionId, updateQuestion)

  this.createAnswer = function() {
    this.answer._user = this.user._id;
    this.answer._question = $routeParams.questionId;
    this.answer.likes = 0;
    qF.createAnswer(this.answer);
  }
  this.like = function(answerId) {
    qF.like(answerId, updateQuestion);
  }

}])
