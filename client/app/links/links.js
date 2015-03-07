angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {

  $scope.data = {};

  $scope.logout = function(){
    Auth.signout();
  };

  $scope.getLinks = function(){
    Links.get().then(function(data){
      $scope.data.links = data.sort(function(a,b){
        return b.visits - a.visits;
      });
    });
  };

  $scope.getLinks();

});