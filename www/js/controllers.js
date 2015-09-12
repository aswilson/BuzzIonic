angular.module('starter.controllers', ['ngOpenFB'])

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

// .controller('ProfileCtrl', function ($scope, ngFB) {
//     ngFB.api({
//         path: '/me',
//         params: {fields: 'id,name'}
//     }).then(
//         function (user) {
//             $scope.user = user;
//         },
//         function (error) {
//             alert('Facebook error: ' + error.error_description);
//         });
// });
