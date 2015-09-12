angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('QueuesCtrl', function($scope, Queues) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.queues = Queues.all();
  $scope.remove = function(queue) {
    Queues.remove(queue);
  };
})

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
 $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Alert',
       template: 'Sammi has now become available'
     });
     alertPopup.then(function(res) {
      Queues.remove(queues[2])
     });
   };
  })

.controller('QueueDetailCtrl', function($scope, $stateParams, Queues) {
  $scope.queue = Queues.get($stateParams.queueId);
  $scope.remove = function(queue) {
    Queues.remove(queue);
  };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
