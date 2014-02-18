'use strict';

angular.module('fsappApp')
  .controller('MainCtrl', function ($scope, $rootScpe) {
    // $rootScope.reversed = false;

    $scope.awesomeThings = [
      'HTML5',
      'AngularJS',
      'Karma'
    ];

    // $scope.reversed = false;

    $scope.reverseThings = function () {
      $scope.reversed = !$scope.reversed;
      $scope.awesomeThings.reverse();
    };
  });
