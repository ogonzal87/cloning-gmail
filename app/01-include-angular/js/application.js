// (function() {

angular.module('MyApp', [
  'ngRoute'
]).config(function($routeProvider) {
  $routeProvider
  .when('/inbox', {
    templateUrl: 'views/inbox.html',
    controller: 'InboxCtrl'
  })
  .when('/inbox/email/:id', {
    templateUrl: 'views/email.html',
    controller: 'EmailController'
  })
  .otherwise({
    redirectTo: '/inbox'
  });
});

// })();