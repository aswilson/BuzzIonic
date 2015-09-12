angular.module('starter.controllers', ['ngOpenFB'])

.controller('FavoritesCtrl', function($scope, $ionicPopup, $timeout, Contacts) {
  //Get all favorite contacts
  $scope.favorites = Contacts.favorite();

  $scope.data = {}

  // Triggered on a button click, or some other target
  $scope.showUnavailableCallPopup = function() {
    var noCallPopup = $ionicPopup.confirm({
      title: 'This contact is busy',
      template: 'Call at another time?',
      cancelText:'Notify to Call',
      okText:'Call Now'
    });
    noCallPopup.then(function(res) {
      if(res) {
       console.log('Call Now');
     } else {
       console.log('Call Later');
     }
    });
  };

    $scope.showAvailableCallPopup = function() {
    var callPopup = $ionicPopup.show({
      title: 'Calling...'
    });
    callPopup.then(function(res) {
      console.log('Tapped!', res);
    });
    $timeout(function() {
       callPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };

  // Triggered on a button click, or some other target
  $scope.showUnavailableMessagePopup = function() {
    var noMessgePopup = $ionicPopup.show({
      title: 'Your contact is busy',
      subTitle: 'Type your message',
      template: '<input type="text">',
      buttons: [{text:'Queue Message'}, {text:'Send Now'}]
    });
    noMessagePopup.then(function(res) {
      if(res) {
       console.log('Queue Message');
     } else {
       console.log('Send Now');
     }
    });
  };

    $scope.showAvailableMessagePopup = function() {
    var messgePopup = $ionicPopup.show({
      title: 'Your contact is available',
      subTitle: 'Type your message',
      template: '<input type="text">',
      buttons: [{text:'Cancel'}, {text:'Send', type:'button-positive'}]
    });
    messagePopup.then(function(res) {
      if(res) {
       console.log('Queue Message');
     } else {
       console.log('Send Now');
     }
    });
  };
})

.controller('ContactsCtrl', function($scope, $ionicPopup, $timeout, Contacts) {
  $scope.contacts = Contacts.alphabetical();

  $scope.data = {}

  // Triggered on a button click, or some other target
  $scope.showUnavailableCallPopup = function() {
    var noCallPopup = $ionicPopup.confirm({
      title: 'This contact is busy',
      template: 'Call at another time?',
      cancelText:'Notify to Call',
      okText:'Call Now'
    });
    noCallPopup.then(function(res) {
      if(res) {
       console.log('Call Now');
     } else {
       console.log('Call Later');
     }
    });
  };

    $scope.showAvailableCallPopup = function() {
    var callPopup = $ionicPopup.show({
      title: 'Calling...'
    });
    callPopup.then(function(res) {
      console.log('Tapped!', res);
    });
    $timeout(function() {
       callPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };

  // Triggered on a button click, or some other target
  $scope.showUnavailableMessagePopup = function() {
    var noMessgePopup = $ionicPopup.show({
      title: 'Your contact is busy',
      subTitle: 'Type your message',
      template: '<input type="text">',
      buttons: [{text:'Queue Message'}, {text:'Send Now'}]
    });
    noMessagePopup.then(function(res) {
      if(res) {
       console.log('Queue Message');
     } else {
       console.log('Send Now');
     }
    });
  };

    $scope.showAvailableMessagePopup = function() {
    var messgePopup = $ionicPopup.show({
      title: 'Your contact is available',
      subTitle: 'Type your message',
      template: '<input type="text">',
      buttons: [{text:'Cancel'}, {text:'Send', type:'button-positive'}]
    });
    messagePopup.then(function(res) {
      if(res) {
       console.log('Queue Message');
     } else {
       console.log('Send Now');
     }
    });
  };
})

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

.controller('AccountCtrl', function($scope, ngFB) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.fbLogin = function () {
    ngFB.login({scope: 'basic_info, email'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                console.log(response);
                 ngFB.api({
                      path: '/me',
                      params: {fields: 'id,name'}
                  }).then(
                      function (user) {
                          $scope.user = user;
                          $scope.response = response;
                          // var date = new Date();
                          // // var current_hour = date.format("HH:mm").toString();
                          // var appDate = $filter('date')(app.date, "dd/MM/yyyy");
                          // $scope.appDate = appDate;
                      },
                      function (error) {
                          alert('Facebook error: ' + error.error_description);
                       });
                // $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
  };
});
