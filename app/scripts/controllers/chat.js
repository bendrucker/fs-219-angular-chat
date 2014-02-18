'use strict';

angular.module('fsappApp')
  .controller('ChatCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://fs-demo-219.firebaseio.com/messages');

    $scope.messages = $firebase(ref);

    $scope.sendMessage = function () {
      $scope.messages.$add({
        username: $scope.user.username,
        body: $scope.newMessage
      });
      $scope.newMessage = '';
    };

    $scope.messageList = function () {
      return $scope.messages;
    };
    
  });