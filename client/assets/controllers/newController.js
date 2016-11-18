app.controller('newController', ['$scope', '$routeParams', 'questionFactory', function($scope, $routeParams, qF) {
  var self = this;
  qF.checkSess(function(user) {
    self.user = user;
  })
  this.create = function() {
    this.question._user = this.user._id
    console.log(this.question)
    qF.create(this.question);
  }
}]);
