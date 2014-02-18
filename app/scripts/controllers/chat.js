'use strict';

angular.module('fsappApp')
  .controller('ChatCtrl', function ($scope) {
    $scope.messages = [];
    $scope.sendMessage = function () {
      $scope.messages.push({
        username: $scope.user.username,
        body: $scope.newMessage
      });
      $scope.newMessage = '';
    };
  });
