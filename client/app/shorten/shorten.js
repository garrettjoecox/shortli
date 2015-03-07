angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {

  if (Auth.isAuth()) $location('login');

  $scope.link = {};

  $scope.logout = function(){
    Auth.signout();
  };

  $scope.addLink = function(){
    Links.post($scope.link);
  };

});
