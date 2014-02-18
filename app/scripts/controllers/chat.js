'use strict';

angular.module('fsappApp')
  .controller('ChatCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://fs-demo-219.firebaseio.com/messages');

    $scope.messages = $firebase(ref);

    $scope.messageForm = {};

    $scope.sendMessage = function () {

      if ($scope.messageForm.$invalid) {
        alert('Form invalid!');
        return;
      }

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