angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {

  $scope.link = {};
  $scope.err;
  $scope.postedLink;
  $scope.waiting;

  $scope.logout = function(){
    Auth.signout();
  };

  $scope.addLink = function(link){
    $scope.waiting = true;
    $scope.postedLink = undefined;
    $scope.err = undefined;
    Links.post(link)
      .then(function(data){
        $scope.link = undefined;
        $scope.waiting = false;
        $scope.postedLink = data;
      })
      .catch(function(err){
        $scope.waiting = false;
        $scope.err = err.data.error;
      });
  };

});
