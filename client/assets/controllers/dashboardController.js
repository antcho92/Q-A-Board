app.controller('dashboardController', ['$scope', 'usersFactory', 'dashboardFactory', function($scope, uF, dF) {
  var self = this;
  uF.checkSess(function(user) {
    self.user = user;
  });
  function getQuestions(questions) {
    self.questions = questions;
    self.question = {};
  }
  dF.index(getQuestions);
}])
