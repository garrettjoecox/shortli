// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.err;
  $scope.cp;

  $scope.signin = function () {
    $scope.err = undefined;
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        // document.getElementById('signinForm').classList.add('has-error');
        $scope.err = error.data.error;
      });
  };

  $scope.signup = function () {
    $scope.err = undefined;
    if ($scope.cp === $scope.user.password){
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          $scope.err = error.data.error;
          document.getElementById('signinForm').classList.add('has-error');
        });
    } else {
      $scope.err = "Passwords don't match!";
    }
  };
});
